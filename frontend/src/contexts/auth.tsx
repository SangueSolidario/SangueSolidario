import { callCustomApi, callMsGraph } from "@/utils/graph";
import {
  AccountInfo,
  InteractionRequiredAuthError,
  InteractionStatus,
} from "@azure/msal-browser";
import { useMsal } from "@azure/msal-react";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { graphLoginRequest, apiLoginRequest } from "@/contexts/authConfig";
import { postDoador } from "@/services/apiRoutes";

type GraphData = {
  displayName: string;
  jobTitle: string;
  mail: string;
  businessPhones: string[];
  officeLocation: string;
};

interface AuthContextData {
  signed: boolean;
  user: GraphData | null;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<AuthProviderProps> = ({
  children,
}: AuthProviderProps) => {
  const { instance, inProgress } = useMsal();
  const [graphData, setGraphData] = useState<GraphData | null>(null);
  const [user, setUser] = useState<GraphData | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await callMsGraph();

        await callCustomApi();

        setGraphData(response);
        setUser(response);
        await postDoador({
          email: response.mail,
          Nome: response.displayName,
        });
        // Acquire token for custom API after getting user data
        await instance.acquireTokenSilent({
          ...apiLoginRequest,
          account: instance.getActiveAccount() as AccountInfo,
        });
      } catch (error) {
        if (error instanceof InteractionRequiredAuthError) {
          instance.acquireTokenRedirect({
            ...graphLoginRequest,
            account: instance.getActiveAccount() as AccountInfo,
            redirectUri: "/",
          });
        } else {
          console.error(error);
        }
      }
    };

    if (!graphData && inProgress === InteractionStatus.None) {
      fetchProfile();
    }
  }, [graphData, inProgress, instance]);

  return (
    <AuthContext.Provider value={{ signed: !!user, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}

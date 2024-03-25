import { callMsGraph } from "@/utils/graph";
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
import { loginRequest } from "@/contexts/authConfig";

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
    if (!graphData && inProgress === InteractionStatus.None) {
      callMsGraph()
        .then((response) => {
          console.log("Graph response:", response);
          setGraphData(response);
          setUser(response);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          if (error instanceof InteractionRequiredAuthError) {
            instance.acquireTokenRedirect({
              ...loginRequest,
              account: instance.getActiveAccount() as AccountInfo,
              redirectUri: "/",
            });
          }
        });
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

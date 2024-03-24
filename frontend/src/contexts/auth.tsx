import { callMsGraph } from "@/utils/graph";
import {
  AccountInfo,
  InteractionRequiredAuthError,
  InteractionStatus,
} from "@azure/msal-browser";
import { useMsal } from "@azure/msal-react";
import React, { ReactNode, createContext, useContext, useEffect } from "react";
import { useState } from "react";
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

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface AuthProviderProps {
  children: ReactNode; // Define the type of children prop
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const { instance, inProgress } = useMsal();
  const [graphData, setGraphData] = useState<null | GraphData>(null);

  const [user, setUser] = useState<GraphData | null>(null);

  useEffect(() => {
    if (!graphData && inProgress === InteractionStatus.None) {
      callMsGraph()
        .then((response) => {
          setGraphData(response);
          setUser(response);
        })
        .catch((e) => {
          if (e instanceof InteractionRequiredAuthError) {
            instance.acquireTokenRedirect({
              ...loginRequest,
              account: instance.getActiveAccount() as AccountInfo,
              redirectUri: "/",
            });
          }
        });
    }
  }, [inProgress, graphData, instance]);

  return (
    <AuthContext.Provider value={{ signed: Boolean(user), user }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

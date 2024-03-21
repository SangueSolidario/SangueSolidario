import { HeartPulse } from "lucide-react";
import { Link } from "react-router-dom";
import { useMsal } from "@azure/msal-react";
import { useEffect, useState } from "react";
import {
  AccountInfo,
  InteractionRequiredAuthError,
  InteractionStatus,
} from "@azure/msal-browser";
import { callMsGraph } from "@/utils/graph";
import { loginRequest } from "@/authConfig";

type GraphData = {
  displayName: string;
  jobTitle: string;
  mail: string;
  businessPhones: string[];
  officeLocation: string;
};

export function NavBar() {
  const { instance, inProgress } = useMsal();
  const [graphData, setGraphData] = useState<null | GraphData>(null);

  useEffect(() => {
    if (!graphData && inProgress === InteractionStatus.None) {
      callMsGraph()
        .then((response) => setGraphData(response))
        .catch((e) => {
          if (e instanceof InteractionRequiredAuthError) {
            instance.acquireTokenRedirect({
              ...loginRequest,
              account: instance.getActiveAccount() as AccountInfo,
            });
          }
        });
    }
  }, [inProgress, graphData, instance]);
  return (
    <header className="text-gray-700 body-font border-b border-gray-200">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          to={"/"}
        >
          <HeartPulse className="w-10 h-10 text-white p-2 bg-red-500 rounded-full" />
          <span className="ml-3 text-xl">SangueSolidario</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link
            to={"/campanhas"}
            className="mr-5 hover:text-gray-900 p-2 hover:bg-red-50 rounded"
          >
            Campanhas
          </Link>
          <Link
            to={"/perfil"}
            className="mr-5 hover:text-gray-900 p-2 hover:bg-red-50 rounded"
          >
            Perfil
          </Link>
          {graphData?.displayName ? (
            <span>{graphData?.displayName}</span>
          ) : (
            <Link
              to={"/login"}
              className="mr-5 hover:text-gray-900 p-2 hover:bg-red-50 rounded"
              onClick={() => instance.loginPopup()}
            >
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}

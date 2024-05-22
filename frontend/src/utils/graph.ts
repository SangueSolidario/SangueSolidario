import { apiLoginRequest } from "@/contexts/authConfig";
import { msalInstance } from "@/main";
import { graphLoginRequest, graphConfig } from "../contexts/authConfig";

export async function callMsGraph() {
  const account = msalInstance.getActiveAccount();
  if (!account) {
    throw new Error(
      "No active account! Verify a user has been signed in and setActiveAccount has been called."
    );
  }

  // Acquire token silently for Microsoft Graph
  const graphResponse = await msalInstance.acquireTokenSilent({
    ...graphLoginRequest,
    account: account,
  });

  const headers = new Headers();
  const bearer = `Bearer ${graphResponse.accessToken}`;
  headers.append("Authorization", bearer);

  const options = {
    method: "GET",
    headers: headers,
  };

  return fetch(graphConfig.graphMeEndpoint, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
      throw error;
    });
}

export async function callCustomApi() {
  const account = msalInstance.getActiveAccount();
  if (!account) {
    throw new Error(
      "No active account! Verify a user has been signed in and setActiveAccount has been called."
    );
  }

  // Acquire token silently for custom API
  const response = await msalInstance.acquireTokenSilent({
    ...apiLoginRequest,
    account: account,
  });

  const headers = new Headers();
  const bearer = `Bearer ${response.accessToken}`;
  localStorage.setItem("token", response.accessToken);
  headers.append("Authorization", bearer);

  console.log(response.accessToken);
}

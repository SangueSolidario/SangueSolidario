import { Configuration, PopupRequest } from "@azure/msal-browser";

const clientId = import.meta.env.VITE_CLIENT_ID;
const clientIdProd = import.meta.env.CLIENT_ID;
const tenantId =
  import.meta.env.VITE_TENANT_ID ||
  import.meta.env.WEBSITE_AUTH_AAD_ALLOWED_TENANTS;

export const msalConfigWeb: Configuration = {
  auth: {
    clientId: clientId || clientIdProd,
    authority: `https://login.microsoftonline.com/${tenantId}`,
    redirectUri: "/",
    postLogoutRedirectUri: "/",
  },
  system: {
    allowNativeBroker: false,
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: false,
  },
};

export const graphLoginRequest: PopupRequest = {
  scopes: ["User.Read"],
};
export const apiLoginRequest: PopupRequest = {
  scopes: [`api://${clientId}/API.Call`],
};

export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
};

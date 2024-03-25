import { Configuration, PopupRequest } from "@azure/msal-browser";

const clientId = import.meta.env.VITE_CLIENT_ID;
const clientIdProd = import.meta.env.CLIENT_ID;
const tenantId =
  import.meta.env.VITE_TENANT_ID ||
  import.meta.env.WEBSITE_AUTH_AAD_ALLOWED_TENANTS;

export const msalConfig: Configuration = {
  auth: {
    clientId: clientId ? clientId : clientIdProd,
    authority: `https://sts.windows.net/${tenantId}/v2.0`,
    redirectUri: "/",
    postLogoutRedirectUri: "/",
  },
  system: {
    allowNativeBroker: false,
  },
};

export const loginRequest: PopupRequest = {
  scopes: ["User.Read"],
};

export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
};

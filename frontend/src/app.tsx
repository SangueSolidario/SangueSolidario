import { IPublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/auth";
import { Campaigns } from "./pages/campaigns";
import { Home } from "./pages/home";
import { Perfil } from "./pages/perfil";

interface AppProps {
  pca: IPublicClientApplication;
}

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/campanhas" element={<Campaigns />} />
      <Route path="/perfil" element={<Perfil />} />
    </Routes>
  );
};

export function App({ pca }: AppProps) {
  return (
    <MsalProvider instance={pca}>
      <AuthProvider>
        <Router>
          <AppRoutes />
        </Router>
      </AuthProvider>
    </MsalProvider>
  );
}

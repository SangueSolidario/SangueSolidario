import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Campaigns } from "./pages/campaigns";
import { Perfil } from "./pages/perfil";
import { IPublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";

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
      <Router>
        <AppRoutes />
      </Router>
    </MsalProvider>
  );
}

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useAuth } from "./contexts/auth";
import { Campaigns } from "./pages/campaigns";
import { Home } from "./pages/home";
import { Perfil } from "./pages/perfil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const SignInRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/campanhas" element={<Campaigns />} />
      <Route path="/perfil" element={<Perfil />} />
    </Routes>
  );
};

const SignOutRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<Home />} />
      <Route path="/campanhas" element={<Campaigns />} />
    </Routes>
  );
};

const queryClient = new QueryClient();

export function App() {
  const { signed } = useAuth();
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        {signed ? <SignInRoutes /> : <SignOutRoutes />}
      </QueryClientProvider>
    </Router>
  );
}

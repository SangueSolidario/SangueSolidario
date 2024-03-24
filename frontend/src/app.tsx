import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useAuth } from "./contexts/auth";
import { Campaigns } from "./pages/campaigns";
import { Home } from "./pages/home";
import { Perfil } from "./pages/perfil";

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
    </Routes>
  );
};

export function App() {
  const { signed } = useAuth();
  return <Router>{signed ? <SignInRoutes /> : <SignOutRoutes />}</Router>;
}

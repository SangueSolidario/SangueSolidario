import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Campaigns } from "./pages/campaigns";
import { Perfil } from "./pages/perfil";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/campanhas" element={<Campaigns />} />
      <Route path="/perfil" element={<Perfil />} />
    </Routes>
  );
};

export function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

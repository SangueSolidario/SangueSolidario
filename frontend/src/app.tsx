import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import Campanhas from "./pages/campanhas";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/campanhas" element={<Campanhas />} />
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

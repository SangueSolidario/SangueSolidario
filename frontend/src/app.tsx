import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
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

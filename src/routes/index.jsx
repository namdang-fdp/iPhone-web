import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import BuyPage from "../pages/BuyPage";

const AppRoutes = () => {
	return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/buy" element={<BuyPage />} />
    </Routes>
  );
};

export default AppRoutes;

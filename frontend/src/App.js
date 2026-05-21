import AnalyticsPage from "./pages/AnalyticsPage";
import AssetHistoryPage from "./pages/AssetHistoryPage";
import AssetsPage from "./pages/AssetsPage";
import ClearanceHistory from "./pages/ClearanceHistory";
import ClearancePage from "./pages/ClearancePage";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import ResignationPage from "./pages/ResignationPage";
import Dashboard from "./pages/Dashboard";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ResignationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/clearance" element={<ClearancePage />} />
        <Route path="/clearance-history" element={<ClearanceHistory />} />
        <Route path="/assets" element={<AssetsPage />} />
        <Route path="/asset-history" element={<AssetHistoryPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

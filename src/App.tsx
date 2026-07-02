import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { PricingPage } from "./pages/PricingPage";
import { JoinPage } from "./pages/JoinPage";
import { PlaygroundPage } from "./playground/PlaygroundPage";
import { SectionsPage } from "./playground/SectionsPage";
import { ScrollToHash } from "./ScrollToHash";

export function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/join" element={<JoinPage />} />
        {/* Dev-only surfaces */}
        <Route path="/playground" element={<PlaygroundPage />} />
        <Route path="/sections" element={<SectionsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

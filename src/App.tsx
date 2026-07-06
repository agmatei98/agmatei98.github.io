import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { PricingPage } from "./pages/PricingPage";
import { JoinPage } from "./pages/JoinPage";
import { ContactPage } from "./pages/ContactPage";
import { SupportPage } from "./pages/SupportPage";
import { TermsPage } from "./pages/TermsPage";
import { CookiesPage } from "./pages/CookiesPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { PlaygroundPage } from "./playground/PlaygroundPage";
import { SectionsPage } from "./playground/SectionsPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ScrollToHash } from "./ScrollToHash";

export function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/cookies" element={<CookiesPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        {/* Dev-only surfaces */}
        <Route path="/playground" element={<PlaygroundPage />} />
        <Route path="/sections" element={<SectionsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { TelemetryRails } from "./components/TelemetryRails";
import { OrderModalProvider } from "./contexts/OrderModalContext";
import { OrderModal } from "./components/OrderModal";
import { Routes, Route, useLocation } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { SmallBatchProductionPage } from "./pages/SmallBatchProductionPage";
import { SouvenirsPage } from "./pages/SouvenirsPage";
import { MassProductionPage } from "./pages/MassProductionPage";
import { MarketplacePage } from "./pages/MarketplacePage";
import { SaaSPage } from "./pages/SaaSPage";
import { MerchPage } from "./pages/MerchPage";
import { ArtObjectsPage } from "./pages/ArtObjectsPage";

export default function App() {
  const location = useLocation();
  const isSaaS = location.pathname === "/saas";

  return (
  <OrderModalProvider>
  <div className="min-h-screen bg-bee-black text-bee-white transition-colors relative">
  {!isSaaS && <TelemetryRails />}
  {!isSaaS && <Navbar />}
  <main>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/saas" element={<SaaSPage />} />
    <Route path="/small-batch" element={<SmallBatchProductionPage />} />
    <Route path="/souvenirs" element={<SouvenirsPage />} />
    <Route path="/mass-production" element={<MassProductionPage />} />
    <Route path="/marketplace" element={<MarketplacePage />} />
    <Route path="/merch" element={<MerchPage />} />
    <Route path="/art-objects" element={<ArtObjectsPage />} />
  </Routes>
  </main>
  {!isSaaS && <Footer />}
  <OrderModal />
 </div>
 </OrderModalProvider>
 );
}

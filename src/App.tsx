/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { TelemetryRails } from "./components/TelemetryRails";
import { OrderModalProvider } from "./contexts/OrderModalContext";
import { OrderModal } from "./components/OrderModal";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { SmallBatchProductionPage } from "./pages/SmallBatchProductionPage";
import { SouvenirsPage } from "./pages/SouvenirsPage";
import { MassProductionPage } from "./pages/MassProductionPage";
import { MarketplacePage } from "./pages/MarketplacePage";

export default function App() {
  return (
  <OrderModalProvider>
  <div className="min-h-screen bg-bee-black text-bee-white transition-colors relative">
  <TelemetryRails />
  <Navbar />
  <main>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/small-batch" element={<SmallBatchProductionPage />} />
    <Route path="/souvenirs" element={<SouvenirsPage />} />
    <Route path="/mass-production" element={<MassProductionPage />} />
    <Route path="/marketplace" element={<MarketplacePage />} />
  </Routes>
  </main>
  <Footer />
  <OrderModal />
 </div>
 </OrderModalProvider>
 );
}

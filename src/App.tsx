/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Calculator } from "./components/Calculator";
import { Gallery } from "./components/Gallery";
import { MaaS } from "./components/MaaS";
import { Footer } from "./components/Footer";
import { TelemetryRails } from "./components/TelemetryRails";
import { OrderModalProvider } from "./contexts/OrderModalContext";
import { OrderModal } from "./components/OrderModal";

export default function App() {
  return (
    <OrderModalProvider>
      <div className="min-h-screen bg-bee-black text-bee-white transition-colors relative">
        <TelemetryRails />
        <Navbar />
        <main>
          <Hero />
          <Calculator />
          <Gallery />
          <MaaS />
        </main>
        <Footer />
        <OrderModal />
      </div>
    </OrderModalProvider>
  );
}

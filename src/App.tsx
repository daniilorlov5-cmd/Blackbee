/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { WhatWeDo } from "./components/WhatWeDo";
import { Partners } from "./components/Partners";
import { SpecialProducts } from "./components/SpecialProducts";
import { PhotoToModel } from "./components/PhotoToModel";
import { Calculator } from "./components/Calculator";
import { Gallery } from "./components/Gallery";
import { MaaS } from "./components/MaaS";
import { PartnershipForm } from "./components/PartnershipForm";
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
          <WhatWeDo />
          <Partners />
          <SpecialProducts />
          <PhotoToModel />
          <MaaS />
          <Calculator />
          <Gallery />
          <PartnershipForm />
        </main>
        <Footer />
        <OrderModal />
      </div>
    </OrderModalProvider>
  );
}

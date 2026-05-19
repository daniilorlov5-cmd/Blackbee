import { Hero } from "../components/Hero";
import { WhatWeDo } from "../components/WhatWeDo";
import { Partners } from "../components/Partners";
import { SpecialProducts } from "../components/SpecialProducts";
import { PhotoToModel } from "../components/PhotoToModel";
import { Calculator } from "../components/Calculator";
import { Gallery } from "../components/Gallery";
import { MaaS } from "../components/MaaS";
import { PartnershipForm } from "../components/PartnershipForm";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state && (location.state as any).scrollTo) {
      const id = (location.state as any).scrollTo;
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      // Clear state to prevent scrolling on every render
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <WhatWeDo />
      <Calculator />
      <PhotoToModel />
      <SpecialProducts />
      <Partners />
      <MaaS />
      <Gallery />
      <PartnershipForm />
    </>
  );
}

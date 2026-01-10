import React from "react";
import WorkspaceCleaningHero from "../features/services/digital-transformation/WorkspaceCleaningHero";
import WhatsIncludedSection from "../features/services/digital-transformation/WhatsIncludedSection";
import HowItWorksSection from "../features/services/digital-transformation/HowItWorksSection";
import ServicePageSection from "../features/services/digital-transformation/ServicePageSection";
import FAQSection from "../features/services/digital-transformation/FAQSection";
import ClientReviewsSection from "../features/services/digital-transformation/ClientReviewsSection";

const Digitaltransformation = () => {
  return (
    <div>
      <WorkspaceCleaningHero />
      <WhatsIncludedSection />
      <HowItWorksSection />
      <ServicePageSection />
      <ClientReviewsSection />
      <FAQSection />
    </div>
  );
};

export default Digitaltransformation;

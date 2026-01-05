import React from "react";
import WorkspaceCleaningHero from "../components/Digitaltransformation/WorkspaceCleaningHero";
import WhatsIncludedSection from "../components/Digitaltransformation/WhatsIncludedSection";
import HowItWorksSection from "../components/Digitaltransformation/HowItWorksSection";
import OtherServices from "../components/Digitaltransformation/OtherServices";
import CTASection from "../components/Digitaltransformation/CTASection";
import ServicePageSection from "../components/Digitaltransformation/ServicePageSection";
import FAQSection from "../components/Digitaltransformation/FAQSection";

const Digitaltransformation = () => {
  return (
    <div>
      <WorkspaceCleaningHero />
      <WhatsIncludedSection />
      <HowItWorksSection />
      
      <ServicePageSection />
      <FAQSection />
    </div>
  );
};

export default Digitaltransformation;

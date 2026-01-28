import React from "react";
import WorkspaceCleaningHero from "../components/Digitaltransformation/WorkspaceCleaningHero";
import WhatsIncludedSection from "../components/Digitaltransformation/WhatsIncludedSection";
import HowItWorksSection from "../components/Digitaltransformation/HowItWorksSection";
import ServicePageSection from "../components/Digitaltransformation/ServicePageSection";
import FAQSection from "../components/Digitaltransformation/FAQSection";
import ClientReviewsSection from "../components/Digitaltransformation/ClientReviewsSection";
import ServicesSection from "@/components/Home/CardSection";

const Digitaltransformation = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <WorkspaceCleaningHero />
      <WhatsIncludedSection />
      <HowItWorksSection />
      <ServicesSection />
      <ClientReviewsSection />
      <FAQSection />
    </div>
  );
};

export default Digitaltransformation;

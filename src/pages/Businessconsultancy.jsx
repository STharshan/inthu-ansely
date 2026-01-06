import React from "react";
import FinancialPlanningHeader from "../components/Businessconsultancy/FinancialPlanningHeader";
import FinancialConfidenceSection from "../components/Businessconsultancy/FinancialConfidenceSection";
import ServicesSection from "../components/Businessconsultancy/ServicesSection";
import HowWeWorkSection from "../components/Businessconsultancy/HowWeWorkSection";
import ServicePageSection from "../components/Businessconsultancy/ServicePageSection";
import ClientReviewsSection from "../components/Businessconsultancy/ClientReviewsSection";
import FAQSection from "../components/Businessconsultancy/FAQSection";

const Businessconsultancy = () => {
  return (
    <div>
      <FinancialPlanningHeader />
      <FinancialConfidenceSection />
      <ServicesSection />
      <HowWeWorkSection />
      <ServicePageSection />
      <ClientReviewsSection />
      <FAQSection />
    </div>
  );
};

export default Businessconsultancy;

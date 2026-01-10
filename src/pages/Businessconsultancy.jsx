import React from "react";
import FinancialPlanningHeader from "../features/services/ai-consulting/FinancialPlanningHeader";
import FinancialConfidenceSection from "../features/services/ai-consulting/FinancialConfidenceSection";
import ServicesSection from "../features/services/ai-consulting/ServicesSection";
import HowWeWorkSection from "../features/services/ai-consulting/HowWeWorkSection";
import ServicePageSection from "../features/services/ai-consulting/ServicePageSection";
import ClientReviewsSection from "../features/services/ai-consulting/ClientReviewsSection";
import FAQSection from "../features/services/ai-consulting/FAQSection";
import { LearningGuide } from "../components/organisms/LearningGuide";

const Businessconsultancy = () => {
  return (
    <div>
      <FinancialPlanningHeader />
      <FinancialConfidenceSection />
      <LearningGuide service="ai-consulting" />
      <ServicesSection />
      <HowWeWorkSection />
      <ServicePageSection />
      <ClientReviewsSection />
      <FAQSection />
    </div>
  );
};

export default Businessconsultancy;

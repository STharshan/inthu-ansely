import React from "react";
import { FAQSection } from "../../../components/organisms/FAQSection";
import { digitalPartnershipsFAQs, digitalPartnershipsFAQConfig } from "../../../constants/faq";

const DigitalPartnershipsFAQSection: React.FC = () => {
  return (
    <FAQSection
      categoryTag={digitalPartnershipsFAQConfig.categoryTag}
      heading={digitalPartnershipsFAQConfig.heading}
      description={digitalPartnershipsFAQConfig.description}
      imageUrl={digitalPartnershipsFAQConfig.imageUrl}
      imageAlt={digitalPartnershipsFAQConfig.imageAlt}
      serviceTags={digitalPartnershipsFAQConfig.serviceTags}
      ctaButton={digitalPartnershipsFAQConfig.ctaButton}
      faqItems={digitalPartnershipsFAQs}
    />
  );
};

export default DigitalPartnershipsFAQSection;


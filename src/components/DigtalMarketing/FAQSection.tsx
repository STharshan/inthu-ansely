import React from "react";
import { FAQSection } from "../organisms/FAQSection";
import { digitalMarketingFAQs, digitalMarketingFAQConfig } from "../../constants/faq";

const DigitalMarketingFAQSection: React.FC = () => {
  return (
    <FAQSection
      categoryTag={digitalMarketingFAQConfig.categoryTag}
      heading={digitalMarketingFAQConfig.heading}
      description={digitalMarketingFAQConfig.description}
      imageUrl={digitalMarketingFAQConfig.imageUrl}
      imageAlt={digitalMarketingFAQConfig.imageAlt}
      serviceTags={digitalMarketingFAQConfig.serviceTags}
      ctaButton={digitalMarketingFAQConfig.ctaButton}
      faqItems={digitalMarketingFAQs}
    />
  );
};

export default DigitalMarketingFAQSection;


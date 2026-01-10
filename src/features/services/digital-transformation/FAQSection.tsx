import React from "react";
import { FAQSection } from "../../../components/organisms/FAQSection";
import { digitalTransformationFAQs, digitalTransformationFAQConfig } from "../../../constants/faq";

const DigitalTransformationFAQSection: React.FC = () => {
  return (
    <FAQSection
      categoryTag={digitalTransformationFAQConfig.categoryTag}
      heading={digitalTransformationFAQConfig.heading}
      description={digitalTransformationFAQConfig.description}
      imageUrl={digitalTransformationFAQConfig.imageUrl}
      imageAlt={digitalTransformationFAQConfig.imageAlt}
      serviceTags={digitalTransformationFAQConfig.serviceTags}
      ctaButton={digitalTransformationFAQConfig.ctaButton}
      faqItems={digitalTransformationFAQs}
    />
  );
};

export default DigitalTransformationFAQSection;

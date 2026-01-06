import React from "react";
import { FAQSection } from "../organisms/FAQSection";
import { customSoftwareFAQs, customSoftwareFAQConfig } from "../../constants/faq";

const CustomSoftwareFAQSection: React.FC = () => {
  return (
    <FAQSection
      categoryTag={customSoftwareFAQConfig.categoryTag}
      heading={customSoftwareFAQConfig.heading}
      description={customSoftwareFAQConfig.description}
      imageUrl={customSoftwareFAQConfig.imageUrl}
      imageAlt={customSoftwareFAQConfig.imageAlt}
      serviceTags={customSoftwareFAQConfig.serviceTags}
      ctaButton={customSoftwareFAQConfig.ctaButton}
      faqItems={customSoftwareFAQs}
    />
  );
};

export default CustomSoftwareFAQSection;


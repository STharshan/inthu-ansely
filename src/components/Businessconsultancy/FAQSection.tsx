import React from "react";
import { FAQSection } from "../organisms/FAQSection";
import { businessConsultancyFAQs, businessConsultancyFAQConfig } from "../../constants/faq";

const BusinessConsultancyFAQSection: React.FC = () => {
  return (
    <FAQSection
      categoryTag={businessConsultancyFAQConfig.categoryTag}
      heading={businessConsultancyFAQConfig.heading}
      description={businessConsultancyFAQConfig.description}
      imageUrl={businessConsultancyFAQConfig.imageUrl}
      imageAlt={businessConsultancyFAQConfig.imageAlt}
      serviceTags={businessConsultancyFAQConfig.serviceTags}
      ctaButton={businessConsultancyFAQConfig.ctaButton}
      faqItems={businessConsultancyFAQs}
    />
  );
};

export default BusinessConsultancyFAQSection;


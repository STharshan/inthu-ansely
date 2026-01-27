import React from "react";
import { FAQSection } from "../organisms/FAQSection";
import { mobileAppDevelopmentFAQs, mobileAppDevelopmentFAQConfig } from "../../constants/faq";

const MobileAppDevelopmentFAQSection: React.FC = () => {
  return (
    <FAQSection
      categoryTag={mobileAppDevelopmentFAQConfig.categoryTag}
      heading={mobileAppDevelopmentFAQConfig.heading}
      description={mobileAppDevelopmentFAQConfig.description}
      imageUrl={mobileAppDevelopmentFAQConfig.imageUrl}
      imageAlt={mobileAppDevelopmentFAQConfig.imageAlt}
      serviceTags={mobileAppDevelopmentFAQConfig.serviceTags}
      ctaButton={mobileAppDevelopmentFAQConfig.ctaButton}
      faqItems={mobileAppDevelopmentFAQs}
    />
  );
};

export default MobileAppDevelopmentFAQSection;


import React from "react";
import { FAQSection } from "../organisms/FAQSection";
import { customWebsitesFAQs, customWebsitesFAQConfig } from "../../constants/faq";

const CustomWebsitesFAQSection: React.FC = () => {
  return (
    <FAQSection
      categoryTag={customWebsitesFAQConfig.categoryTag}
      heading={customWebsitesFAQConfig.heading}
      description={customWebsitesFAQConfig.description}
      imageUrl={customWebsitesFAQConfig.imageUrl}
      imageAlt={customWebsitesFAQConfig.imageAlt}
      serviceTags={customWebsitesFAQConfig.serviceTags}
      ctaButton={customWebsitesFAQConfig.ctaButton}
      faqItems={customWebsitesFAQs}
    />
  );
};

export default CustomWebsitesFAQSection;


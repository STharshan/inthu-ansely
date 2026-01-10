import React from "react";
import { FAQSection } from "../../components/organisms/FAQSection";
import { contactFAQs, contactFAQConfig } from "../../constants/faq";

const ContactFAQSection: React.FC = () => {
  return (
    <FAQSection
      categoryTag={contactFAQConfig.categoryTag}
      heading={contactFAQConfig.heading}
      description={contactFAQConfig.description}
      imageUrl={contactFAQConfig.imageUrl}
      imageAlt={contactFAQConfig.imageAlt}
      serviceTags={contactFAQConfig.serviceTags}
      faqItems={contactFAQs}
    />
  );
};

export default ContactFAQSection;

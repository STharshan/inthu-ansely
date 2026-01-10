import React from "react";
import { ServicePageTemplate } from "../../../components/templates/ServicePageTemplate";
import {
  serviceCards,
  digitalMarketingTopicButtons,
  digitalMarketingCTAButtons,
} from "../../../constants/servicePage";

const ServicePageSection: React.FC = () => {
  return (
    <ServicePageTemplate
      categoryTag="Digital Marketing, Branding & Social Media"
      heading="Services"
      description="Elevate your brand with comprehensive digital marketing strategies, compelling brand identity design, and powerful social media campaigns that engage audiences and drive measurable results."
      topicButtons={digitalMarketingTopicButtons}
      ctaButtons={digitalMarketingCTAButtons}
      imageUrl="/d1.avif"
      imageAlt="Digital marketing illustration"
      serviceCards={serviceCards}
    />
  );
};

export default ServicePageSection;


import React from "react";
import { ServicePageTemplate } from "../ServicePage";
import {
  serviceCards,
  businessConsultancyTopicButtons,
  businessConsultancyCTAButtons,
} from "../../constants/servicePage";

const ServicePageSection: React.FC = () => {
  return (
    <ServicePageTemplate
      categoryTag="Business Consultancy & AI Consultancy"
      heading="Services"
      description="Get expert strategic guidance on business optimization, AI implementation, and digital transformation to unlock growth opportunities, improve efficiency, and make data-driven decisions."
      topicButtons={businessConsultancyTopicButtons}
      ctaButtons={businessConsultancyCTAButtons}
      imageUrl="/d1.avif"
      imageAlt="Business consultancy illustration"
      serviceCards={serviceCards}
    />
  );
};

export default ServicePageSection;

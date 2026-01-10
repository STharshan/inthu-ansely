import React from "react";
import { ServicePageTemplate } from "../../../components/templates/ServicePageTemplate";
import {
  serviceCards,
  customSoftwareTopicButtons,
  customSoftwareCTAButtons,
} from "../../../constants/servicePage";

const ServicePageSection: React.FC = () => {
  return (
    <ServicePageTemplate
      categoryTag="Custom Software Development"
      heading="Services"
      description="Develop scalable, enterprise-grade software solutions and applications that perfectly align with your business needs, from cloud applications to mobile apps and legacy system modernization."
      topicButtons={customSoftwareTopicButtons}
      ctaButtons={customSoftwareCTAButtons}
      imageUrl="/d1.avif"
      imageAlt="Custom software development illustration"
      serviceCards={serviceCards}
    />
  );
};

export default ServicePageSection;

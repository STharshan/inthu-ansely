import React from "react";
import { ServicePageTemplate } from "../ServicePage";
import {
  serviceCards,
  customWebsitesTopicButtons,
  customWebsitesCTAButtons,
} from "../../constants/servicePage";

const ServicePageSection: React.FC = () => {
  return (
    <ServicePageTemplate
      categoryTag="Custom Websites"
      heading="Services"
      description="Create stunning, responsive websites and web applications tailored to your brand that deliver exceptional user experiences, drive conversions, and establish your strong online presence."
      topicButtons={customWebsitesTopicButtons}
      ctaButtons={customWebsitesCTAButtons}
      imageUrl="/d1.avif"
      imageAlt="Custom websites illustration"
      serviceCards={serviceCards}
    />
  );
};

export default ServicePageSection;

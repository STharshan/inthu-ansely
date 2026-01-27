import React from "react";
import { ServicePageTemplate } from "../ServicePage";
import {
  serviceCards,
  mobileAppDevelopmentTopicButtons,
  mobileAppDevelopmentCTAButtons,
} from "../../constants/servicePage";

const ServicePageSection: React.FC = () => {
  return (
    <ServicePageTemplate
      categoryTag="Mobile App Development"
      heading="Services"
      description="Transform your ideas into high-performance mobile applications with our expert development services, delivering seamless user experiences across iOS and Android platforms."
      topicButtons={mobileAppDevelopmentTopicButtons}
      ctaButtons={mobileAppDevelopmentCTAButtons}
      imageUrl="/d1.avif"
      imageAlt="Mobile app development illustration"
      serviceCards={serviceCards}
    />
  );
};

export default ServicePageSection;

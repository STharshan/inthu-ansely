import React from "react";
import { ServicePageTemplate } from "../../../components/templates/ServicePageTemplate";
import {
  serviceCards,
  digitalTransformationTopicButtons,
  digitalTransformationCTAButtons,
} from "../../../constants/servicePage";

const ServicePageSection: React.FC = () => {
  return (
    <ServicePageTemplate
      categoryTag="Digital Transformation"
      heading="Services"
      description="Helping businesses modernize and thrive in the digital age through comprehensive transformation strategies that drive innovation, efficiency, and growth."
      topicButtons={digitalTransformationTopicButtons}
      ctaButtons={digitalTransformationCTAButtons}
      imageUrl="/d1.avif"
      imageAlt="Digital transformation illustration"
      serviceCards={serviceCards}
    />
  );
};

export default ServicePageSection;

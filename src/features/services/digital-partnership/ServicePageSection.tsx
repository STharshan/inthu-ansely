import React from "react";
import { ServicePageTemplate } from "../../../components/templates/ServicePageTemplate";
import {
  serviceCards,
  digitalPartnershipsTopicButtons,
  digitalPartnershipsCTAButtons,
} from "../../../constants/servicePage";

const ServicePageSection: React.FC = () => {
  return (
    <ServicePageTemplate
      categoryTag="Digital Partnerships"
      heading="Services"
      description="Building strategic alliances and channel partnerships that expand your market reach, integrate with leading platforms, and create collaborative opportunities for mutual growth and success."
      topicButtons={digitalPartnershipsTopicButtons}
      ctaButtons={digitalPartnershipsCTAButtons}
      imageUrl="/d1.avif"
      imageAlt="Digital partnerships illustration"
      serviceCards={serviceCards}
    />
  );
};

export default ServicePageSection;

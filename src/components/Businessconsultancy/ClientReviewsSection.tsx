import React from "react";
import { ClientReviewsSection } from "../organisms/ClientReviewsSection";
import {
  businessConsultancyClientReviews,
  businessConsultancyStatistics,
  businessConsultancyClientReviewsConfig,
} from "../../constants/clientReviews";
import { businessConsultancyCTAButtons } from "../../constants/servicePage";

const BusinessConsultancyClientReviewsSection: React.FC = () => {
  return (
    <ClientReviewsSection
      categoryTag={businessConsultancyClientReviewsConfig.categoryTag}
      reviewCount={businessConsultancyClientReviewsConfig.reviewCount}
      heading={businessConsultancyClientReviewsConfig.heading}
      description={businessConsultancyClientReviewsConfig.description}
      imageUrl={businessConsultancyClientReviewsConfig.imageUrl}
      imageAlt={businessConsultancyClientReviewsConfig.imageAlt}
      imagePosition={businessConsultancyClientReviewsConfig.imagePosition}
      ctaButtons={businessConsultancyCTAButtons}
      reviews={businessConsultancyClientReviews}
      statistics={businessConsultancyStatistics}
    />
  );
};

export default BusinessConsultancyClientReviewsSection;


import React from "react";
import { ClientReviewsSection } from "../../../components/organisms/ClientReviewsSection";
import {
  sampleClientReviews,
  sampleStatistics,
  businessConsultancyClientReviewsConfig,
} from "../../../constants/clientReviews";
import { businessConsultancyCTAButtons } from "../../../constants/servicePage";

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
      reviews={sampleClientReviews}
      statistics={sampleStatistics}
    />
  );
};

export default BusinessConsultancyClientReviewsSection;


import React from "react";
import { ClientReviewsSection } from "../organisms/ClientReviewsSection";
import {
  sampleClientReviews,
  sampleStatistics,
  mobileAppDevelopmentClientReviewsConfig,
} from "../../constants/clientReviews";
import { mobileAppDevelopmentCTAButtons } from "../../constants/servicePage";

const MobileAppDevelopmentClientReviewsSection: React.FC = () => {
  return (
    <ClientReviewsSection
      categoryTag={mobileAppDevelopmentClientReviewsConfig.categoryTag}
      reviewCount={mobileAppDevelopmentClientReviewsConfig.reviewCount}
      heading={mobileAppDevelopmentClientReviewsConfig.heading}
      description={mobileAppDevelopmentClientReviewsConfig.description}
      imageUrl={mobileAppDevelopmentClientReviewsConfig.imageUrl}
      imageAlt={mobileAppDevelopmentClientReviewsConfig.imageAlt}
      imagePosition={mobileAppDevelopmentClientReviewsConfig.imagePosition}
      ctaButtons={mobileAppDevelopmentCTAButtons}
      reviews={sampleClientReviews}
      statistics={sampleStatistics}
    />
  );
};

export default MobileAppDevelopmentClientReviewsSection;


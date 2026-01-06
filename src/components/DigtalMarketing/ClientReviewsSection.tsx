import React from "react";
import { ClientReviewsSection } from "../organisms/ClientReviewsSection";
import {
  sampleClientReviews,
  sampleStatistics,
  digitalMarketingClientReviewsConfig,
} from "../../constants/clientReviews";
import { digitalMarketingCTAButtons } from "../../constants/servicePage";

const DigitalMarketingClientReviewsSection: React.FC = () => {
  return (
    <ClientReviewsSection
      categoryTag={digitalMarketingClientReviewsConfig.categoryTag}
      reviewCount={digitalMarketingClientReviewsConfig.reviewCount}
      heading={digitalMarketingClientReviewsConfig.heading}
      description={digitalMarketingClientReviewsConfig.description}
      imageUrl={digitalMarketingClientReviewsConfig.imageUrl}
      imageAlt={digitalMarketingClientReviewsConfig.imageAlt}
      imagePosition={digitalMarketingClientReviewsConfig.imagePosition}
      ctaButtons={digitalMarketingCTAButtons}
      reviews={sampleClientReviews}
      statistics={sampleStatistics}
    />
  );
};

export default DigitalMarketingClientReviewsSection;


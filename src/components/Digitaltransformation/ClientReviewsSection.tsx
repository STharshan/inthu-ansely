import React from "react";
import { ClientReviewsSection } from "../organisms/ClientReviewsSection";
import {
  sampleClientReviews,
  sampleStatistics,
  digitalTransformationClientReviewsConfig,
} from "../../constants/clientReviews";
import { digitalTransformationCTAButtons } from "../../constants/servicePage";

const DigitalTransformationClientReviewsSection: React.FC = () => {
  return (
    <ClientReviewsSection
      categoryTag={digitalTransformationClientReviewsConfig.categoryTag}
      reviewCount={digitalTransformationClientReviewsConfig.reviewCount}
      heading={digitalTransformationClientReviewsConfig.heading}
      description={digitalTransformationClientReviewsConfig.description}
      imageUrl={digitalTransformationClientReviewsConfig.imageUrl}
      imageAlt={digitalTransformationClientReviewsConfig.imageAlt}
      imagePosition={digitalTransformationClientReviewsConfig.imagePosition}
      ctaButtons={digitalTransformationCTAButtons}
      reviews={sampleClientReviews}
      statistics={sampleStatistics}
    />
  );
};

export default DigitalTransformationClientReviewsSection;

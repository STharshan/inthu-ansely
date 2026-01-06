import React from "react";
import { ClientReviewsSection } from "../organisms/ClientReviewsSection";
import {
  sampleClientReviews,
  sampleStatistics,
  customSoftwareClientReviewsConfig,
} from "../../constants/clientReviews";
import { customSoftwareCTAButtons } from "../../constants/servicePage";

const CustomSoftwareClientReviewsSection: React.FC = () => {
  return (
    <ClientReviewsSection
      categoryTag={customSoftwareClientReviewsConfig.categoryTag}
      reviewCount={customSoftwareClientReviewsConfig.reviewCount}
      heading={customSoftwareClientReviewsConfig.heading}
      description={customSoftwareClientReviewsConfig.description}
      imageUrl={customSoftwareClientReviewsConfig.imageUrl}
      imageAlt={customSoftwareClientReviewsConfig.imageAlt}
      imagePosition={customSoftwareClientReviewsConfig.imagePosition}
      ctaButtons={customSoftwareCTAButtons}
      reviews={sampleClientReviews}
      statistics={sampleStatistics}
    />
  );
};

export default CustomSoftwareClientReviewsSection;


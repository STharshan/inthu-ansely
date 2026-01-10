import React from "react";
import { ClientReviewsSection } from "../../../components/organisms/ClientReviewsSection";
import {
  sampleClientReviews,
  sampleStatistics,
  customWebsitesClientReviewsConfig,
} from "../../../constants/clientReviews";
import { customWebsitesCTAButtons } from "../../../constants/servicePage";

const CustomWebsitesClientReviewsSection: React.FC = () => {
  return (
    <ClientReviewsSection
      categoryTag={customWebsitesClientReviewsConfig.categoryTag}
      reviewCount={customWebsitesClientReviewsConfig.reviewCount}
      heading={customWebsitesClientReviewsConfig.heading}
      description={customWebsitesClientReviewsConfig.description}
      imageUrl={customWebsitesClientReviewsConfig.imageUrl}
      imageAlt={customWebsitesClientReviewsConfig.imageAlt}
      imagePosition={customWebsitesClientReviewsConfig.imagePosition}
      ctaButtons={customWebsitesCTAButtons}
      reviews={sampleClientReviews}
      statistics={sampleStatistics}
    />
  );
};

export default CustomWebsitesClientReviewsSection;


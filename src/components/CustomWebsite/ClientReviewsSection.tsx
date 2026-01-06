import React from "react";
import { ClientReviewsSection } from "../organisms/ClientReviewsSection";
import {
  customWebsitesClientReviews,
  customWebsitesStatistics,
  customWebsitesClientReviewsConfig,
} from "../../constants/clientReviews";
import { customWebsitesCTAButtons } from "../../constants/servicePage";

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
      reviews={customWebsitesClientReviews}
      statistics={customWebsitesStatistics}
    />
  );
};

export default CustomWebsitesClientReviewsSection;


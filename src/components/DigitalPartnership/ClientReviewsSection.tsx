import React from "react";
import { ClientReviewsSection } from "../organisms/ClientReviewsSection";
import {
  sampleClientReviews,
  sampleStatistics,
  digitalPartnershipsClientReviewsConfig,
} from "../../constants/clientReviews";
import { digitalPartnershipsCTAButtons } from "../../constants/servicePage";

const DigitalPartnershipsClientReviewsSection: React.FC = () => {
  return (
    <ClientReviewsSection
      categoryTag={digitalPartnershipsClientReviewsConfig.categoryTag}
      reviewCount={digitalPartnershipsClientReviewsConfig.reviewCount}
      heading={digitalPartnershipsClientReviewsConfig.heading}
      description={digitalPartnershipsClientReviewsConfig.description}
      imageUrl={digitalPartnershipsClientReviewsConfig.imageUrl}
      imageAlt={digitalPartnershipsClientReviewsConfig.imageAlt}
      imagePosition={digitalPartnershipsClientReviewsConfig.imagePosition}
      ctaButtons={digitalPartnershipsCTAButtons}
      reviews={sampleClientReviews}
      statistics={sampleStatistics}
    />
  );
};

export default DigitalPartnershipsClientReviewsSection;


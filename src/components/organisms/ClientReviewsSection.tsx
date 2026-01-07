import React from "react";
import { ClientReviewsProps } from "../types/clientReviews";
import { ReviewHeader } from "../molecules/ReviewHeader";
import { TestimonialsGrid } from "./TestimonialsGrid";
import { StatisticsGrid } from "./StatisticsGrid";

export const ClientReviewsSection: React.FC<ClientReviewsProps> = ({
  categoryTag,
  reviewCount,
  heading,
  description,
  imageUrl,
  imageAlt,
  imagePosition = "left",
  ctaButtons,
  reviews,
  statistics,
  className = "",
}) => {
  return (
    <section
      className={`relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <ReviewHeader
            categoryTag={categoryTag || reviewCount}
            heading={heading}
            description={description}
            imageUrl={imageUrl}
            imageAlt={imageAlt}
            imagePosition={imagePosition}
            ctaButtons={ctaButtons}
          />
        </div>

        {/* Testimonials Grid */}
        {reviews && reviews.length > 0 && (
          <div className="mb-16">
            <TestimonialsGrid reviews={reviews} />
          </div>
        )}

        {/* Statistics Grid */}
        {statistics && statistics.length > 0 && (
          <div>
            <StatisticsGrid statistics={statistics} />
          </div>
        )}
      </div>
    </section>
  );
};

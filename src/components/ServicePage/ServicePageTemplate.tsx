import React from "react";
import { ServicePageProps } from "./types";
import { ServiceHeader } from "../organisms/ServiceHeader";
import { ServiceGrid } from "../organisms/ServiceGrid";
import { ServiceTags } from "../organisms/ServiceTags";

export const ServicePageTemplate: React.FC<ServicePageProps> = ({
  categoryTag,
  heading,
  description,
  topicButtons,
  ctaButtons,
  imageUrl,
  imageAlt = "Service illustration",
  serviceCards,
  serviceTags,
  className = "",
}) => {
  return (
    <section
      className={`relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Left Column - Header Content */}
          <div className="flex flex-col justify-center">
            <ServiceHeader
              categoryTag={categoryTag}
              heading={heading}
              description={description}
              topicButtons={topicButtons}
              ctaButtons={ctaButtons}
            />
          </div>

          {/* Right Column - Image */}
          {imageUrl && (
            <div className="flex items-center justify-center lg:justify-end">
              <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 transition-colors duration-300">
                <img src={imageUrl} alt={imageAlt} className="w-full h-auto object-cover" />
              </div>
            </div>
          )}
        </div>

        {/* Service Cards Grid */}
        {serviceCards && serviceCards.length > 0 && (
          <div className="mb-16">
            <ServiceGrid cards={serviceCards} />
          </div>
        )}

        {/* Service Tags */}
        {serviceTags && serviceTags.length > 0 && (
          <div className="border-t border-gray-200 dark:border-white/10 pt-8 transition-colors duration-300">
            <ServiceTags tags={serviceTags} />
          </div>
        )}
      </div>
    </section>
  );
};

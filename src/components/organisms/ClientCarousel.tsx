import React from "react";
import { ClientCarouselProps } from "../types/clientCarousel";

export const ClientCarousel: React.FC<ClientCarouselProps> = ({
  clients,
  className = "",
  heading = "Over 50+ businesses trust us",
  showHeading = true,
}) => {
  const duplicatedClients = [...clients, ...clients, ...clients, ...clients];

  return (
    <section
      className={`relative w-full bg-black py-12 sm:py-16 md:py-20 transition-colors duration-300 ${className}`}
    >
      {/* Centered Container with Padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {showHeading && (
          <div className="text-center mb-12">
            <p className="text-base sm:text-lg font-medium text-gray-400 transition-colors duration-300">
              {heading}
            </p>
          </div>
        )}

        {/* Carousel Wrapper with Gradient Masks */}
        <div className="relative">
          {/* Left Gradient Fade - Always black */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 md:w-40 lg:w-48 z-10 pointer-events-none bg-gradient-to-r from-black to-transparent" />

          {/* Right Gradient Fade - Always black */}
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 md:w-40 lg:w-48 z-10 pointer-events-none bg-gradient-to-l from-black to-transparent" />

          {/* Scrolling Container - Overflow Hidden */}
          <div className="overflow-hidden">
            {/* Scrolling Logos - Uses carousel-scroll animation */}
            <div
              className="inline-flex items-center gap-12 sm:gap-16 md:gap-20 lg:gap-24"
              style={{
                animation: "carousel-scroll 40s linear infinite",
              }}
            >
              {duplicatedClients.map((client, index) => (
                <a
                  key={`${client.id}-${index}`}
                  href={client.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 transition-all duration-300 hover:scale-105"
                  aria-label={`Visit ${client.name} website`}
                >
                  <img
                    src={client.logoUrl}
                    alt={client.name}
                    className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

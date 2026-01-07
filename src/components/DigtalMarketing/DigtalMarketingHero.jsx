import React from "react";

export default function DigitalMarketingHero() {
  return (
    <section className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh]">
      {/* Background Image */}
      <img
        src="/d1.avif" // update path if needed
        alt="Landscape Design"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-end">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 pb-10 sm:pb-16">
          {/* Breadcrumb */}
          <p className="text-xs sm:text-sm text-gray-200 dark:text-gray-300 uppercase tracking-widest mb-2 transition-colors duration-300">
            From visibility to loyalty—and beyond.
          </p>

          {/* Title */}
          <h1 className="text-white dark:text-white font-bold leading-tight
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl transition-colors duration-300">
            Helping hidden gems stand tall in the digital world.
          </h1>
        </div>
      </div>
    </section>
  );
}

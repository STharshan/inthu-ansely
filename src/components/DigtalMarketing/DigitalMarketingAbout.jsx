import React from "react";

export default function DigitalMarketingAbout() {
  return (
    <section className="bg-black text-white py-16 sm:py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
              <span className="w-2 h-2 rounded-full bg-lime-400"></span>
              <span className="text-xs uppercase tracking-widest text-gray-300">
                About the Service
              </span>
            </div>

            {/* Title */}
            <h2 className="font-bold leading-relaxed text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              OUR ARCHITECTURAL DESIGNS HARMONIOUSLY UNITE FORM AND FUNCTION,
              CRAFTING VISUALLY STRIKING STRUCTURES THAT ARE ALSO HIGHLY
              PRACTICAL.
            </h2>

            {/* Description */}
            <p className="mt-6 text-gray-400 leading-relaxed text-sm sm:text-base">
              We take a holistic approach to every project, focusing on
              aesthetics, sustainability, and the overall experience for
              occupants.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/d2.avif" // update path
                alt="Architecture Design"
                className="w-full h-[320px] sm:h-[400px] md:h-[480px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

import React from 'react';

export default function DigitalPartnershipHero() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Container */}
      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* Left Section - Content */}
        <div className="flex-1 flex flex-col justify-between p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20">
          {/* Main Title */}
          <div className="flex-1 flex items-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none">
              Studio Nive
            </h1>
          </div>

          {/* Description */}
          <div className="mt-8 lg:mt-0">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-2xl leading-relaxed">
              Creative direction and brand identity for a fashion-focused design studio
              entering the global market.
            </p>
          </div>
        </div>

        {/* Right Section - Image and Info */}
        <div className="flex-1 flex flex-col justify-between p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20">
          {/* Image Container */}
          <div className="relative mb-8 lg:mb-0">
            <div className="aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=1000&fit=crop"
                alt="Fashion model"
                className="w-full h-100 object-cover"
              />
            </div>
      
          </div>
        </div>
      </div>
    </div>
  );
}
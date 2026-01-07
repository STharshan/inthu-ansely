import React from 'react';

export default function DigitalPartnershipHero() {
  return (
    <div className="h-[100vh] dark:bg-black bg-white dark:text-white text-black transition-colors duration-500">
      {/* Main Container */}
      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* Left Section - Content */}
        <div className="flex-1 flex flex-col justify-between p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20">
          {/* Main Title */}
          <div className="flex-1 flex items-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none">
              Digital Partnerships
            </h1>
          </div>

          {/* Description */}
          <div className="mt-2 lg:mt-0">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed">
              Leveling the playing field — bringing businesses into the digital age.
            </p>
          </div>

          <p className="text-gray-700 dark:text-gray-500 mt-4 max-w-2xl leading-relaxed">
            We partner with ambitious businesses to design, build, and scale technology-driven products that power real-world growth.
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="flex-1 flex flex-col justify-between p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20">
          {/* Image Container */}
          <div className="relative mb-8 lg:mb-0">
            <div className="aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=1000&fit=crop"
                alt="Fashion model"
                className="w-full h-full object-cover transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

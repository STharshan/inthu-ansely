import React from 'react';

export default function DigitalPartnershipHero() {
  return (
    <div className="min-h-screen mt-10 md:mt-20 dark:bg-black bg-white dark:text-white text-black transition-colors duration-500 overflow-hidden">
      {/* Main Container */}
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-80px)]">

        {/* Left Section - Content */}
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-between p-6 sm:p-10 md:p-16 lg:p-20 order-2 lg:order-1">

          {/* Main Title - Fluid typography */}
          <div className="flex-1 flex items-center mb-10 lg:mb-0">
            <h1 className="text-5xl sm:text-7xl md:text-8xl xl:text-9xl font-bold leading-[0.9] tracking-tighter">
              Digital <br className="hidden md:block" />
              Partnerships
            </h1>
          </div>

          {/* Descriptions Grouped */}
          <div className="space-y-6">
            <p className="text-xl pt-5 sm:text-2xl md:text-3xl text-gray-800 dark:text-gray-200 max-w-2xl leading-tight font-medium">
              Leveling the playing field — bringing businesses into the digital age.
            </p>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl text-base md:text-lg leading-relaxed">
              We partner with ambitious businesses to design, build, and scale technology-driven products that power real-world growth.
            </p>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="col-span-12 xl:col-span-5 p-4 sm:p-8 lg:p-12 flex items-center order-1 lg:order-2">
          <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[85%] xl:h-[80%] overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="/d1.avif"
              alt="Digital Partnership Visual"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* Subtle Gradient Overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>
        </div>

      </div>
    </div>
  );
}
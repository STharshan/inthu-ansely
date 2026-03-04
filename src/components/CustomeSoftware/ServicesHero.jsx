import React from "react";

export default function ServicesHero() {
  return (
    <div className="relative w-full min-h-[80vh] lg:h-screen bg-white dark:bg-black overflow-hidden flex items-center justify-center p-4 sm:p-8 lg:p-12 mt-10 lg:mt-20">
      {/* Main Content Card */}
      <div
        className="relative w-full mt-10 max-w-7xl min-h-[500px] lg:h-[650px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl"
        style={{
          backgroundImage: "url('/custom-software-hero-banner.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/60 lg:bg-black/50"></div>

        {/* Content Container */}
        <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-16 lg:py-24">
          
          {/* Heading - Fluid text sizes */}
          <div className="space-y-1 md:space-y-2 mb-6 md:mb-8">
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              From concept to code
            </h1>
            <div className="flex flex-wrap items-baseline gap-x-4 md:gap-x-6">
              <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                and
              </h1>
              <h1
                className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif italic"
                style={{ fontFamily: "Georgia, serif" }}
              >
                beyond.
              </h1>
            </div>
          </div>

          {/* Subheading */}
          <h2 className="text-blue-400 lg:text-white text-lg sm:text-xl md:text-2xl font-semibold mb-4 lg:mb-6 max-w-2xl">
            Helping hidden gems stand tall in the digital world.
          </h2>

          {/* Description */}
          <p className="text-gray-300 lg:text-gray-200 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
            We build custom software that doesn't just work—it evolves with you.
            Whether you're scaling a startup or modernizing legacy systems, we
            craft solutions that are powerful, intuitive, and built to last.
          </p>
        </div>
      </div>
    </div>
  );
}
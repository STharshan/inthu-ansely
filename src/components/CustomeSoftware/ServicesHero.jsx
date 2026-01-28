import React from "react";

export default function ServicesHero() {
  return (
    <div className="relative w-full h-screen bg-white dark:bg-black overflow-hidden flex items-center justify-center p-8 pb-30 mt-20">
      {/* Main Content Card */}
      <div
        className="relative w-full max-w-8xl h-[600px] rounded-xl overflow-hidden shadow-2xl mt-20"
        style={{
          backgroundImage: "url('/custom-software-hero-banner.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-16 py-20">
          {/* Tag */}

          {/* Heading */}
          <div className="space-y-2 mb-8">
            <h1 className="text-white text-7xl font-bold leading-tight">
              From concept to code
            </h1>
            <div className="flex items-baseline gap-6">
              <h1 className="text-white text-7xl font-bold">
                and
              </h1>
              <h1
                className="text-white text-7xl font-serif italic"
                style={{ fontFamily: "Georgia, serif" }}
              >
                beyond.
              </h1>
            </div>
          </div>

          {/* Subheading */}
          <h2 className="text-white text-2xl font-semibold mb-6">
            Helping hidden gems stand tall in the digital world.
          </h2>

          {/* Description */}
          <p className="text-gray-200 text-xl max-w-2xl leading-relaxed">
            We build custom software that doesn't just work—it evolves with you.
            Whether you're scaling a startup or modernizing legacy systems, we
            craft solutions that are powerful, intuitive, and built to last.
          </p>
        </div>
      </div>
    </div>
  );
}

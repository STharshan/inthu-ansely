import React from "react";
import { CareersHeaderProps } from "../types/careers";
import { careersConfig } from "../../constants/careers";

export const CareersHeader: React.FC<CareersHeaderProps> = ({
  className = "",
}) => {
  return (
    <section
      className={`relative w-full overflow-hidden bg-gradient-to-br from-gradient-start via-gradient-middle to-gradient-start text-white transition-colors duration-300 ${className}`}
    >
      {/* Abstract Geometric Shapes Overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large circular shape on left */}
        <div className="absolute left-[-10%] top-[-10%] w-[400px] h-[400px] bg-brand-blue opacity-25 rounded-full blur-3xl" />

        {/* Grid dots pattern */}
        <div className="absolute left-[15%] top-[20%] w-[200px] h-[200px] opacity-30">
          <div className="grid grid-cols-4 gap-4 w-full h-full">
            {Array.from({ length: 16 }).map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-blue-400 rounded-full opacity-60"
              />
            ))}
          </div>
        </div>

        {/* Smaller circular shape on right */}
        <div className="absolute right-[10%] top-[10%] w-[150px] h-[150px] bg-gradient-end opacity-80 rounded-full" />

        {/* Rectangular block on right */}
        <div className="absolute right-[5%] bottom-[20%] w-[120px] h-[80px] bg-gradient-end opacity-70 rounded-lg" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        <div className="text-center">
          {/* "Open Positions" small text */}
          <p className="text-sm sm:text-base text-white/80 mb-4 font-medium uppercase tracking-wider transition-colors duration-300">
            Open Positions
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight transition-colors duration-300">
            {careersConfig.heading}
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
            {careersConfig.description}
          </p>
        </div>
      </div>
    </section>
  );
};

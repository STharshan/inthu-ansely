import React from "react";
import { JobPosition } from "../types/careers";
import { JobIcon } from "../atoms/JobIcon";

interface CareerDetailHeaderProps {
  job: JobPosition;
  className?: string;
}

export const CareerDetailHeader: React.FC<CareerDetailHeaderProps> = ({
  job,
  className = "",
}) => {
  return (
    <section
      className={`relative w-full overflow-hidden bg-gradient-to-br from-[#001a4d] via-[#0033a0] to-[#001a4d] text-white transition-colors duration-300 ${className}`}
    >
      {/* Abstract Geometric Shapes Overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large circular shape on left */}
        <div className="absolute left-[-10%] top-[-10%] w-[400px] h-[400px] bg-[#0045EF] opacity-25 rounded-full blur-3xl" />

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
        <div className="absolute right-[10%] top-[10%] w-[150px] h-[150px] bg-[#002266] opacity-80 rounded-full" />

        {/* Rectangular block on right */}
        <div className="absolute right-[5%] bottom-[20%] w-[120px] h-[80px] bg-[#002266] opacity-70 rounded-lg" />

        {/* Additional shapes for detail page */}
        <div className="absolute left-[-5%] bottom-[-5%] w-[300px] h-[300px] bg-[#0045EF] opacity-20 rounded-full blur-3xl" />
        <div className="absolute right-[-5%] bottom-[-5%] w-[250px] h-[250px] bg-[#0066FF] opacity-15 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        <div className="text-center">
          {/* Location and Employment Type */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex items-center gap-1.5">
              <JobIcon type="location" size={16} />
              <span className="text-white text-sm sm:text-base transition-colors duration-300">
                {job.location}
              </span>
            </div>
            <div className="w-px h-4 bg-white/50" />
            <div className="flex items-center gap-1.5">
              <JobIcon type="employment" size={16} />
              <span className="text-white text-sm sm:text-base transition-colors duration-300">
                {job.employmentType}
              </span>
            </div>
          </div>

          {/* Job Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight transition-colors duration-300">
            {job.title}
          </h1>

          {/* Job Summary */}
          <p className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
            {job.description}
          </p>
        </div>
      </div>
    </section>
  );
};

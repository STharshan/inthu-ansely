import React from "react";

const ProjectDetails = () => {
  return (
    <div className="bg-white dark:bg-black font-sans transition-colors duration-500">
      {/* Hero Image Section */}
      <div className="relative w-full h-[100vh] overflow-hidden">
        <img
          src="w1.jpg"
          alt="Custom Website Development"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div
          className="absolute bottom-0 left-0 w-full p-6 md:p-12
          bg-gradient-to-t
          from-black/30 dark:from-black/70
          to-transparent
          flex flex-col md:flex-row justify-between items-end"
        >
          <h1
            className="text-4xl md:text-7xl font-bold
            text-white tracking-tighter"
          >
            Custom Website Development
          </h1>

          <p
            className="text-white/90 dark:text-white/80
            text-sm md:text-base max-w-xs
            mt-4 md:mt-0 leading-relaxed"
          >
            We craft bespoke digital experiences that elevate brands, engage
            audiences, and support scalable business growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

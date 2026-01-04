import React from 'react';

const ProjectDetails = () => {
  return (
    <div className="bg-white font-sans">
      {/* Hero Image Section */}
      <div className="relative w-full h-[100vh] overflow-hidden">
        <img
          src="w1.jpg" // Replace with your actual image
          alt="LuxeWear Fashion"
          className="w-full h-full object-cover"
        />
        {/* Logo and Intro Text Overlay */}
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 bg-gradient-to-t from-black/20 to-transparent flex flex-col md:flex-row justify-between items-end">
          <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tighter">
            LuxeWear
          </h1>
          <p className="text-white text-sm md:text-base max-w-xs mt-4 md:mt-0 leading-relaxed">
            We designed and built a high-end, conversion-optimized e-commerce website, integrating seamless shopping experiences and branding.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
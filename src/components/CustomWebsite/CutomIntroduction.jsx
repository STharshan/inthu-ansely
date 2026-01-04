import React from "react";

const CustomIntroduction = () => {
  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left Content */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-red-500"></span>
            <p className="text-sm font-medium text-gray-700">
              Introduction
            </p>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 leading-snug">
            LuxeWear, a premium fashion brand, needed an e-commerce website
            that reflected their high-end aesthetic while offering a seamless
            shopping experience for customers.
          </h2>
        </div>

        {/* Right Content */}
        <div className="space-y-6">
          <InfoRow label="Year" value="2025" />
          <InfoRow label="Duration" value="5 Weeks" />
          <InfoRow label="Client" value="LuxeWear (Fashion Brand)" />
          
          <div className="flex items-center justify-between pb-4">
            <p className="text-gray-500 text-sm">Categories</p>
            <span className="px-4 py-1 rounded-full bg-gray-100 text-sm text-gray-700">
              Web design
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

const InfoRow = ({ label, value }) => {
  return (
    <div className="flex items-center justify-between pb-4">
      <p className="text-gray-500 text-sm">{label}</p>
      <p className="text-gray-900 font-medium text-sm sm:text-base">
        {value}
      </p>
    </div>
  );
};

export default CustomIntroduction;

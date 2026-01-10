import React from "react";

const CustomIntroduction = () => {
  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-16 bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Left Content */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[var(--brand-blue)]"></span>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Overview
            </p>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug text-gray-900 dark:text-white">
            Your website is often the first interaction customers have with your brand.
            We design and develop custom websites that align with your business objectives,
            communicate credibility, and deliver measurable results through performance-driven design.
          </h2>
        </div>

      </div>
    </section>
  );
};


export default CustomIntroduction;

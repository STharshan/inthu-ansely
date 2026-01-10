import React from "react";

const ProjectSolution = () => {
  return (
    <section className="w-full bg-white dark:bg-black px-4 sm:px-6 lg:px-16 py-14 transition-colors duration-500">
      <div className="max-w-7xl mx-auto space-y-14">

        {/* Top Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ImageCard src="/w1.jpg" />
          <ImageCard src="/w2.jpg" />
        </div>

        {/* Text Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Label */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--brand-blue)]"></span>
            <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
              Our Approach
            </p>
          </div>

          {/* Right Text */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-3xl font-medium leading-snug text-gray-900 dark:text-white">
              We take a strategy-first approach to custom website development—designing each website from the ground up to match your brand identity and business goals.
            </p>
            <p className="text-xl leading-relaxed text-gray-500 dark:text-gray-400">
             By combining modern UI/UX design, responsive development, SEO-ready architecture, and performance optimization, we deliver websites that are fast, scalable, and built to convert.
            </p>
          </div>

        </div>

        {/* Bottom Large Image */}
        <div className="w-full overflow-hidden rounded-2xl">
          <img
            src="/w3.jpeg"
            alt="Solution Visual"
            className="w-full h-[260px] sm:h-[360px] md:h-[460px] lg:h-[560px] object-cover"
          />
        </div>

      </div>
    </section>
  );
};

const ImageCard = ({ src }) => {
  return (
    <div className="overflow-hidden rounded-2xl">
      <img
        src={src}
        alt="Gallery"
        className="w-full h-[220px] sm:h-[300px] md:h-[360px] object-cover"
      />
    </div>
  );
};

export default ProjectSolution;

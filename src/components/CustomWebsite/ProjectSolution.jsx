import React from "react";
import { ArrowRight } from "lucide-react"; // Import Lucide Icon
import LazyImage from "../LazyImage";

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
            <span className="w-2 h-2 rounded-full bg-[#0045EF]"></span>
            <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
              Our Approach
            </p>
          </div>

          {/* Right Text */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-3">
              <p className="text-3xl font-medium leading-snug text-gray-900 dark:text-white">
                We take a strategy-first approach to custom website development—designing each website from the ground up to match your brand identity and business goals.
              </p>
              <p className="text-xl leading-relaxed text-gray-500 dark:text-gray-400">
                By combining modern UI/UX design, responsive development, SEO-ready architecture, and performance optimisation, we deliver websites that are fast, scalable, and built to convert.
              </p>
            </div>

            {/* Start Learning Link with Lucide Icon */}
            <div className="flex items-center text-[#0045EF] font-bold text-xs tracking-widest uppercase group cursor-pointer w-fit">
              Start Learning 
              <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" strokeWidth={3} />
            </div>
          </div>
        </div>

        {/* Bottom Large Image - Responsive Fix Applied */}
        <div className="w-full overflow-hidden rounded-2xl">
          <LazyImage
            src="/w3.jpeg"
            alt="Solution Visual"
            className="w-full h-auto aspect-[4/3] sm:aspect-video lg:aspect-[21/9] object-cover object-center transition-transform duration-700 hover:scale-105"
          />
        </div>

      </div>
    </section>
  );
};

/* Reusable Image Card Component */
const ImageCard = ({ src }) => {
  return (
    <div className="overflow-hidden rounded-2xl shadow-sm">
      <LazyImage
        src={src}
        alt="Gallery"
        width={600}
        height={360}
        className="w-full h-[220px] sm:h-[300px] md:h-[360px] object-cover transition-transform duration-700 hover:scale-105"
      />
    </div>
  );
};

export default ProjectSolution;
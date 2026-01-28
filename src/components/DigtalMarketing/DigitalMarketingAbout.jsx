import React from "react";

export default function DigitalMarketingAbout() {
  return (
    <section className="bg-white dark:bg-black text-black dark:text-white py-16 sm:py-20 lg:py-28 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT CONTENT */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 dark:border-white/10 bg-gray-100 dark:bg-white/5 mb-6 transition-colors duration-300">
              <span className="w-2 h-2 rounded-full bg-lime-400"></span>
              <span className="text-xs uppercase tracking-widest text-gray-700 dark:text-gray-300 transition-colors duration-300">
                About the Service
              </span>
            </div>

            {/* Title */}
            <h2 className="font-bold leading-relaxed text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black dark:text-white transition-colors duration-300">
              Strategic marketing that unites creativity and performance
            </h2>

            {/* Description */}
            <p className="mt-6 text-gray-700 dark:text-gray-400 leading-relaxed text-sm sm:text-base transition-colors duration-300">
              Our digital marketing approach harmoniously blends brand
              storytelling with data-driven performance, crafting campaigns that
              are visually compelling and strategically effective. We take a
              holistic view of every marketing initiative, focusing on brand
              consistency, audience engagement, conversion optimization, and
              measurable ROI. From the first touchpoint to customer advocacy, we
              design experiences that build emotional connections while driving
              business results. We don't just create content—we architect
              comprehensive digital ecosystems where every post, ad, and
              interaction works together to elevate your brand and accelerate
              growth.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/about-digital-marketing.jpeg"
                alt="About Digital Marketing"
                className="w-full h-[320px] sm:h-[400px] md:h-[480px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

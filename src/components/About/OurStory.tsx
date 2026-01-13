import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface OurStoryProps {
  subtitle?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  image1?: string;
  image2?: string;
}

const OurStory: React.FC<OurStoryProps> = ({
  subtitle = "Our Story",
  title = "A great story starts with a great team",
  description = "We believe in the power of collaboration and innovation. Our team brings together diverse talents and perspectives to create solutions that truly make a difference. Every project is a new opportunity to push boundaries and exceed expectations.",
  ctaText = "Join Us",
  ctaLink = "/contact",
  image1 = "/c1.jpg",
  image2 = "/c2.jpg",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax effects for images
  const image1Y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const image2Y = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section
      ref={containerRef}
      className="relative py-12 sm:py-20 md:py-32 bg-white dark:bg-black overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6 order-2 lg:order-1"
          >
            {/* Subtitle */}
            <div className="inline-block">
              <span className="text-xs sm:text-sm font-medium text-[#0045EF] tracking-wider uppercase">
                {subtitle}
              </span>
              <div className="h-0.5 w-12 bg-[#0045EF] mt-2" />
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white leading-tight transition-colors duration-300">
              {title}
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 dark:text-white/70 leading-relaxed transition-colors duration-300">
              {description}
            </p>

            {/* CTA Button */}
            <div>
              <a
                href={ctaLink}
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#0045EF] text-white font-semibold rounded-full hover:bg-[#0039CC] hover:shadow-lg hover:shadow-[#0045EF]/30 transition-all duration-300 group text-sm sm:text-base"
              >
                <span>{ctaText}</span>
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Right Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] sm:h-[500px] md:h-[600px] order-1 lg:order-2"
          >
            {/* Image 1 - Larger, in background */}
            <motion.div
              style={{ y: image1Y }}
              className="absolute top-0 left-0 w-3/5 h-3/5 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={image1}
                alt="Our Team"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#0045EF]/10" />
            </motion.div>

            {/* Image 2 - Smaller, in foreground */}
            <motion.div
              style={{ y: image2Y }}
              className="absolute bottom-0 right-0 w-3/5 h-3/5 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-black transition-colors duration-300"
            >
              <img
                src={image2}
                alt="Our Story"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#0045EF]/10" />
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
              <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-[#0045EF]/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-24 sm:w-32 h-24 sm:h-32 bg-[#0045EF]/10 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;

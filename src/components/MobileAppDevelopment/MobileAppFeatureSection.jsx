import React from "react";
import { motion } from "framer-motion";

/**
 * Mobile App Features Section
 * 3 cards with animated SVG icons
 * Dark/Light mode support
 * No CTA buttons (as requested)
 */

export default function MobileAppFeaturesSection() {
  const features = [
    {
      title: "Native Performance",
      description:
        "Build lightning-fast apps that feel native on iOS and Android. Smooth animations, instant responses, and seamless user experiences.",
      icon: (
        <svg viewBox="0 0 114 114" className="w-full h-full">
          <motion.path
            d="M 48 0 C 21.49 0 0 21.49 0 48 C 0 74.51 21.49 96 48 96 C 74.51 96 96 74.51 96 48 C 96 21.49 74.51 0 48 0 Z M 48 12 C 68.43 12 84 27.57 84 48 C 84 68.43 68.43 84 48 84 C 27.57 84 12 68.43 12 48 C 12 27.57 27.57 12 48 12 Z M 48 24 C 34.75 24 24 34.75 24 48 C 24 61.25 34.75 72 48 72 C 61.25 72 72 61.25 72 48 C 72 34.75 61.25 24 48 24 Z M 48 36 C 54.63 36 60 41.37 60 48 C 60 54.63 54.63 60 48 60 C 41.37 60 36 54.63 36 48 C 36 41.37 41.37 36 48 36 Z"
            fill="transparent"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(9 9)"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
      ),
    },
    {
      title: "Cross-Platform",
      description:
        "Write once, deploy everywhere. Reach iOS, Android, and web users with a single codebase while maintaining platform-specific experiences.",
      icon: (
        <svg viewBox="0 0 114 114" className="w-full h-full">
          <motion.path
            d="M 32 0 C 14.327 0 0 7.163 0 16 C 0 24.837 14.327 32 32 32 C 49.673 32 64 24.837 64 16 C 64 7.163 49.673 0 32 0 Z M 0 16 L 0 32 C 0 40.837 14.327 48 32 48 C 49.673 48 64 40.837 64 32 L 64 16 M 0 32 L 0 48 C 0 56.837 14.327 64 32 64 C 49.673 64 64 56.837 64 48 L 64 32 M 0 48 L 0 64 C 0 72.837 14.327 80 32 80 C 49.673 80 64 72.837 64 80 L 64 64 M 32 24 C 40.837 24 48 20.418 48 16 C 48 11.582 40.837 8 32 8 C 23.163 8 16 11.582 16 16 C 16 20.418 23.163 24 32 24 Z"
            fill="transparent"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(25 9)"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
          />
        </svg>
      ),
    },
    {
      title: "Scalable Architecture",
      description:
        "Built to grow with your success. Our robust architecture handles millions of users with secure, reliable, and maintainable code.",
      icon: (
        <svg viewBox="0 0 114 114" className="w-full h-full">
          <motion.path
            d="M 46.659 8.135 C 50.263 6.048 54.702 6.048 58.306 8.135 L 81.387 21.507 C 84.99 23.594 87.21 27.453 87.21 31.628 L 87.21 58.373 C 87.21 62.548 84.99 66.406 81.387 68.493 L 58.306 81.866 C 54.702 83.953 50.263 83.953 46.659 81.866 L 23.578 68.493 C 19.974 66.406 17.754 62.548 17.754 58.373 L 17.754 31.628 C 17.754 27.453 19.974 23.594 23.578 21.507 Z M 35.801 14.436 C 38.788 12.705 42.469 12.705 45.457 14.436 L 64.592 25.523 C 67.58 27.254 69.42 30.452 69.42 33.914 L 69.42 56.087 C 69.42 59.548 67.58 62.747 64.592 64.477 L 45.457 75.565 C 42.469 77.295 38.788 77.295 35.801 75.565 L 16.665 64.477 C 13.678 62.747 11.837 59.548 11.837 56.087 L 11.837 33.914 C 11.837 30.452 13.678 27.254 16.665 25.523 Z"
            fill="transparent"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(5 12)"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.4 }}
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full py-20 sm:py-24 md:py-32 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white">
            The foundation of exceptional apps
          </h2>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              index={index}
              isFirst={index === 0}
              isLast={index === features.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Feature Card Component
const FeatureCard = ({ feature, index, isFirst, isLast }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`
        relative p-8 sm:p-10 bg-white dark:bg-black
        border border-gray-200 dark:border-gray-800
        ${isFirst ? "rounded-l-2xl md:rounded-l-2xl rounded-t-2xl md:rounded-t-none" : ""}
        ${isLast ? "rounded-r-2xl md:rounded-r-2xl rounded-b-2xl md:rounded-b-none" : ""}
        ${!isFirst && !isLast ? "border-l-0 md:border-l border-t-0 md:border-t" : ""}
        ${isFirst ? "md:border-r-0" : ""}
        ${isLast ? "md:border-l-0" : ""}
        transition-colors duration-300
        hover:bg-gray-50 dark:hover:bg-gray-900
        group
      `}
    >
      {/* Animated Icon */}
      <div className="w-28 h-28 mx-auto mb-8 text-gray-400 dark:text-gray-600 group-hover:text-[#0045EF] transition-colors duration-300">
        {feature.icon}
      </div>

      {/* Title */}
      <h3 className="text-xl sm:text-2xl font-semibold text-black dark:text-white mb-4 text-center">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="text-base text-black/70 dark:text-white/70 text-center leading-relaxed">
        {feature.description}
      </p>
    </motion.div>
  );
};

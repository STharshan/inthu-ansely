import React from 'react';
import { BlogHeroProps } from '../types/blog';

export const BlogHero: React.FC<BlogHeroProps> = ({
  headline,
  subheadline,
  backgroundImageUrl,
  className = '',
}) => {
  return (
    <section className={`relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] ${className}`}>
      {/* Background Image */}
      <img
        src={backgroundImageUrl}
        alt="Blog hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-end">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-10 sm:pb-16">
          {/* Headline */}
          <h1 className="text-white font-bold leading-tight mb-4
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
            transition-colors duration-300">
            {headline}
          </h1>

          {/* Subheadline */}
          <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed
            transition-colors duration-300">
            {subheadline}
          </p>
        </div>
      </div>
    </section>
  );
};


import React from 'react';
import { HomeTestimonialsSectionProps } from '../types/homeTestimonials';
import { CategoryTagWithIcon } from '../atoms/CategoryTagWithIcon';
import { HomeTestimonialCard } from '../molecules/HomeTestimonialCard';

export const HomeTestimonialsSection: React.FC<HomeTestimonialsSectionProps> = ({
  testimonials,
  className = '',
}) => {
  return (
    <section
      className={`relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          {/* Category Tag */}
          <div className="flex justify-center mb-6">
            <CategoryTagWithIcon>REVIEWS</CategoryTagWithIcon>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-black dark:text-white transition-colors duration-300">
            Trusted by <span className="font-serif italic font-normal">Visionaries</span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
            Hear from real users who achieved success with our automation
          </p>
        </div>

        {/* Testimonials Grid - 3 columns, 2 rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <HomeTestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

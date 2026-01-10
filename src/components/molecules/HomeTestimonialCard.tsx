import React from 'react';
import { HomeTestimonial } from '../types/homeTestimonials';
import { AuthorAvatar } from '../atoms/AuthorAvatar';

interface HomeTestimonialCardProps {
  testimonial: HomeTestimonial;
  className?: string;
}

export const HomeTestimonialCard: React.FC<HomeTestimonialCardProps> = ({
  testimonial,
  className = '',
}) => {
  return (
    <div
      className={`bg-gray-50 dark:bg-brand-dark rounded-[20px] p-6 transition-colors duration-300 ${className}`}
      style={{
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
      }}
      onMouseEnter={(e) => {
        if (document.documentElement.classList.contains('dark')) {
          e.currentTarget.style.boxShadow = 'rgba(0, 0, 0, 0.4) 16px 24px 20px 8px';
        } else {
          e.currentTarget.style.boxShadow =
            'rgba(0, 0, 0, 0.15) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -2px';
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow =
          'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px';
      }}
    >
      {/* Client Information */}
      <div className="flex items-start gap-4 mb-4">
        <AuthorAvatar
          src={testimonial.avatarUrl}
          alt={testimonial.name}
          size={48}
          className="flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <h4 className="text-gray-900 dark:text-white font-semibold text-base mb-1 transition-colors duration-300">
            {testimonial.name}
          </h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">
            {testimonial.role} at {testimonial.company}
          </p>
        </div>
      </div>

      {/* Quote */}
      <p className="text-gray-700 dark:text-white/90 text-sm leading-relaxed transition-colors duration-300">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
    </div>
  );
};

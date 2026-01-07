import React from 'react';
import { ClientReview } from '../types/clientReviews';
import { Avatar } from '../atoms/Avatar';
import { StarRating } from '../atoms/StarRating';

interface TestimonialCardProps {
  review: ClientReview;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  review,
  className = '',
}) => {
  return (
    <div
      className={`w-full bg-gray-50 dark:bg-[#0D0D0D] rounded-[20px] will-change-transform opacity-100 p-6 transition-colors duration-300 ${className}`}
      style={{
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
      }}
      onMouseEnter={(e) => {
        if (document.documentElement.classList.contains('dark')) {
          e.currentTarget.style.boxShadow = 'rgba(0, 0, 0, 0.4) 16px 24px 20px 8px';
        } else {
          e.currentTarget.style.boxShadow = 'rgba(0, 0, 0, 0.15) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -2px';
        }
      }}
      onMouseLeave={(e) => {
        if (document.documentElement.classList.contains('dark')) {
          e.currentTarget.style.boxShadow = 'rgba(0, 0, 0, 0.4) 16px 24px 20px 8px';
        } else {
          e.currentTarget.style.boxShadow = 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px';
        }
      }}
    >
      <div className="opacity-100 flex flex-col gap-4">
        {/* Avatar and Name */}
        <div className="flex items-center gap-4">
          <Avatar src={review.avatarUrl} alt={review.name} size={48} />
          <div className="flex flex-col">
            <h4 className="text-gray-900 dark:text-white font-semibold text-base transition-colors duration-300">{review.name}</h4>
            <p className="text-gray-700 dark:text-white/70 text-sm transition-colors duration-300">{review.title}</p>
          </div>
        </div>

        {/* Quote */}
        <p className="text-gray-700 dark:text-white text-sm leading-relaxed text-left transition-colors duration-300">
          "{review.quote}"
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <span className="text-gray-900 dark:text-white text-sm font-medium transition-colors duration-300">{review.rating}.0</span>
          <StarRating rating={review.rating} />
        </div>
      </div>
    </div>
  );
};


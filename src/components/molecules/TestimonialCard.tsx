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
      className={`w-full bg-[#0D0D0D] rounded-[20px] will-change-transform opacity-100 p-6 ${className}`}
      style={{
        boxShadow: 'rgba(0, 0, 0, 0.4) 16px 24px 20px 8px',
      }}
    >
      <div className="opacity-100 flex flex-col gap-4">
        {/* Avatar and Name */}
        <div className="flex items-center gap-4">
          <Avatar src={review.avatarUrl} alt={review.name} size={48} />
          <div className="flex flex-col">
            <h4 className="text-white font-semibold text-base">{review.name}</h4>
            <p className="text-white/70 text-sm">{review.title}</p>
          </div>
        </div>

        {/* Quote */}
        <p className="text-white text-sm leading-relaxed text-left">
          "{review.quote}"
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <span className="text-white text-sm font-medium">{review.rating}.0</span>
          <StarRating rating={review.rating} />
        </div>
      </div>
    </div>
  );
};


import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  className?: string;
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  className = '',
}) => {
  const clampedRating = Math.max(0, Math.min(5, Math.round(rating)));

  return (
    <div className={`flex gap-0.5 ${className}`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 transition-colors duration-300 ${
            star <= clampedRating
              ? 'fill-yellow-400 text-yellow-400'
              : 'text-gray-300 dark:text-gray-600 fill-gray-300 dark:fill-gray-600'
          }`}
        />
      ))}
    </div>
  );
};


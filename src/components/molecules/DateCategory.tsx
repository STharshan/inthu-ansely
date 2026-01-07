import React from 'react';
import { CategoryBadge } from '../atoms/CategoryBadge';

interface DateCategoryProps {
  date: string;
  category: string;
  className?: string;
}

export const DateCategory: React.FC<DateCategoryProps> = ({
  date,
  category,
  className = '',
}) => {
  return (
    <div className={`flex items-center gap-2 text-sm ${className}`}>
      <span className="text-gray-600 dark:text-gray-400 font-medium transition-colors duration-300">
        {date}
      </span>
      <span className="text-gray-400 dark:text-gray-600">•</span>
      <CategoryBadge category={category} />
    </div>
  );
};


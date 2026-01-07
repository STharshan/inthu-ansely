import React from 'react';

interface CategoryBadgeProps {
  category: string;
  className?: string;
}

export const CategoryBadge: React.FC<CategoryBadgeProps> = ({
  category,
  className = '',
}) => {
  return (
    <span
      className={`inline-block px-3 py-1 rounded-lg text-xs font-medium uppercase tracking-wider
        bg-gray-200 dark:bg-gray-800
        text-gray-700 dark:text-gray-300
        border border-gray-300 dark:border-gray-700
        transition-colors duration-300 ${className}`}
    >
      {category}
    </span>
  );
};


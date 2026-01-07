import React from 'react';
import { CategoryFilterProps } from '../types/blog';

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
  className = '',
}) => {
  return (
    <nav
      className={`border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-black transition-colors duration-300 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center gap-8 overflow-x-auto">
          {categories.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`relative py-4 text-sm font-medium whitespace-nowrap transition-colors duration-300
                  ${
                    isActive
                      ? 'text-black dark:text-white'
                      : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
                  }`}
              >
                {category.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-black dark:bg-white transition-colors duration-300" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};


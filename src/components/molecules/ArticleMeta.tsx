import React from 'react';
import { CategoryBadge } from '../atoms/CategoryBadge';
import { ReadTime } from '../atoms/ReadTime';

interface ArticleMetaProps {
  category: string;
  date: string;
  readTime: string;
  className?: string;
}

export const ArticleMeta: React.FC<ArticleMetaProps> = ({
  category,
  date,
  readTime,
  className = '',
}) => {
  return (
    <div className={`flex items-center gap-3 flex-wrap ${className}`}>
      <CategoryBadge category={category} />
      <span className="text-gray-500 dark:text-gray-400 text-sm font-medium transition-colors duration-300">
        {date}
      </span>
      <span className="text-gray-400 dark:text-gray-600">•</span>
      <ReadTime time={readTime} />
    </div>
  );
};


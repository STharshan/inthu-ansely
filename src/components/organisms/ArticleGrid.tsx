import React from 'react';
import { ArticleGridProps } from '../types/blog';
import { ArticleCard } from '../molecules/ArticleCard';

export const ArticleGrid: React.FC<ArticleGridProps> = ({
  articles,
  className = '',
}) => {
  if (!articles || articles.length === 0) {
    return (
      <div className={`text-center py-16 ${className}`}>
        <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
          No articles found.
        </p>
      </div>
    );
  }

  return (
    <section className={`bg-white dark:bg-black py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};


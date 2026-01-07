import React from 'react';
import { Link } from 'react-router-dom';
import { BlogArticle } from '../types/blog';
import { ArticleCard } from '../molecules/ArticleCard';

interface RelatedArticlesProps {
  articles: BlogArticle[];
  currentArticleId?: string;
  className?: string;
}

export const RelatedArticles: React.FC<RelatedArticlesProps> = ({
  articles,
  currentArticleId,
  className = '',
}) => {
  const relatedArticles = articles
    .filter((article) => article.id !== currentArticleId)
    .slice(0, 3);

  if (relatedArticles.length === 0) {
    return null;
  }

  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-black dark:text-white transition-colors duration-300">
          Looking for more? Dive into our other articles, updates, and strategies
        </h2>
        <div className="mb-8">
          <Link
            to="/blog"
            className="inline-block px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-medium rounded-lg hover:opacity-90 transition-all duration-300"
          >
            Browse all articles
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};


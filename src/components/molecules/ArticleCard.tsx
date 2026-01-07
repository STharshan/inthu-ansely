import React from 'react';
import { Link } from 'react-router-dom';
import { ArticleCardProps } from '../types/blog';
import { DateCategory } from './DateCategory';
import { AuthorAvatar } from '../atoms/AuthorAvatar';

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  className = '',
}) => {
  return (
    <Link
      to={article.link}
      className={`group block rounded-2xl overflow-hidden
        bg-white dark:bg-gray-900
        border border-gray-200 dark:border-gray-800
        transition-all duration-300 hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-700
        ${className}`}
    >
      {/* Image */}
      <div className="relative overflow-hidden w-full h-56">
        <img
          src={article.imageUrl}
          alt={article.imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Date & Category */}
        <DateCategory date={article.date} category={article.category} className="mb-4" />

        {/* Title */}
        <h3 className="text-xl font-bold mb-6 leading-tight
          text-black dark:text-white
          transition-colors duration-300">
          {article.title}
        </h3>

        {/* Author */}
        <div className="flex items-center gap-3">
          <AuthorAvatar
            src={article.author.avatarUrl}
            alt={article.author.name}
            size={40}
          />
          <div>
            <p className="font-semibold text-sm
              text-black dark:text-white
              transition-colors duration-300">
              {article.author.name}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
              {article.author.role}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};


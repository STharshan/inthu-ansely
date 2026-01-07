import React from "react";
import { BlogDetailArticle } from "../types/blog";
import { ArticleMeta } from "../molecules/ArticleMeta";
import { AuthorAvatar } from "../atoms/AuthorAvatar";

interface BlogDetailHeaderProps {
  article: BlogDetailArticle;
  className?: string;
}

export const BlogDetailHeader: React.FC<BlogDetailHeaderProps> = ({ article, className = "" }) => {
  return (
    <div className={`mb-12 ${className} mt-20`}>
      {/* Category and Metadata */}
      <ArticleMeta
        category={article.category}
        date={article.date}
        readTime={article.readTime}
        className="mb-6"
      />

      {/* Main Title */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-black dark:text-white transition-colors duration-300">
        {article.title}
      </h1>

      {/* Description/Subtitle */}
      <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-4xl transition-colors duration-300">
        {article.description}
      </p>

      {/* Author Information */}
      <div className="flex items-center gap-4">
        <AuthorAvatar src={article.author.avatarUrl} alt={article.author.name} size={48} />
        <div>
          <p className="font-semibold text-base text-black dark:text-white transition-colors duration-300">
            {article.author.name}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
            {article.author.role}
          </p>
        </div>
      </div>
    </div>
  );
};

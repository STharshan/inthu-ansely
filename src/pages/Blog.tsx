import React, { useState, useMemo } from "react";
import { BlogHero } from "../components/organisms/BlogHero";
import { CategoryFilter } from "../components/organisms/CategoryFilter";
import { ArticleGrid } from "../components/organisms/ArticleGrid";
import { blogCategories, blogArticles, blogHeroConfig } from "../constants/blog";

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredArticles = useMemo(() => {
    if (activeCategory === "all") {
      return blogArticles;
    }

    const categoryMap: Record<string, string> = {
      "ops-strategy": "OPS & STRATEGY",
      "guides-resources": "GUIDES & RESOURCES",
      "product-updates": "PRODUCT & UPDATES",
      "team-culture": "TEAM & CULTURE",
      "insights-analysis": "INSIGHTS & ANALYSIS",
    };

    const categoryFilter = categoryMap[activeCategory];
    return blogArticles.filter((article) => article.category === categoryFilter);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <BlogHero
        headline={blogHeroConfig.headline}
        subheadline={blogHeroConfig.subheadline}
        backgroundImageUrl={blogHeroConfig.backgroundImageUrl}
      />
      {/* <CategoryFilter
        categories={blogCategories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      /> */}
      <ArticleGrid articles={filteredArticles} />
    </div>
  );
};

export default Blog;

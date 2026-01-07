export interface Author {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
}

export interface BlogArticle {
  id: string;
  imageUrl: string;
  imageAlt: string;
  date: string;
  category: string;
  title: string;
  author: Author;
  link: string;
}

export interface BlogCategory {
  id: string;
  label: string;
}

export interface BlogHeroProps {
  headline: string;
  subheadline: string;
  backgroundImageUrl: string;
  className?: string;
}

export interface CategoryFilterProps {
  categories: BlogCategory[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
  className?: string;
}

export interface ArticleCardProps {
  article: BlogArticle;
  className?: string;
}

export interface ArticleGridProps {
  articles: BlogArticle[];
  className?: string;
}


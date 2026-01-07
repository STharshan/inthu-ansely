import { BlogArticle, BlogCategory } from '../components/types/blog';
import { loadAllBlogArticles } from '../utils/blogLoader';

export const blogCategories: BlogCategory[] = [
  { id: 'all', label: 'All' },
  { id: 'ops-strategy', label: 'Ops & Strategy' },
  { id: 'guides-resources', label: 'Guides & Resources' },
  { id: 'product-updates', label: 'Product & Updates' },
  { id: 'team-culture', label: 'Team & Culture' },
  { id: 'insights-analysis', label: 'Insights & Analysis' },
];

export const blogArticles: BlogArticle[] = loadAllBlogArticles().map((article) => ({
  id: article.id,
  imageUrl: article.imageUrl,
  imageAlt: article.imageAlt,
  date: article.date,
  category: article.category,
  title: article.title,
  author: article.author,
  link: `/blog/${article.slug}`,
}));

export const blogHeroConfig = {
  headline: 'Research-led insights for modern finance teams',
  subheadline: 'Practical tactics, stories, and benchmarks from the field—so finance leaders can move faster with clarity, control, and trust.',
  backgroundImageUrl: '/d1.avif',
};


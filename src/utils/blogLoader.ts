import { BlogDetailArticle } from '../components/types/blog';
import digitalTransformation from '../content/blog/digital-transformation-automation.json';
import digitalPartnerships from '../content/blog/digital-partnerships.json';
import customWebsites from '../content/blog/custom-websites.json';
import customSoftware from '../content/blog/custom-software-development.json';
import businessAI from '../content/blog/business-ai-consultancy.json';
import digitalMarketing from '../content/blog/digital-marketing-branding.json';

const blogArticlesMap: Record<string, BlogDetailArticle> = {
  'digital-transformation-automation': digitalTransformation as BlogDetailArticle,
  'digital-partnerships': digitalPartnerships as BlogDetailArticle,
  'custom-websites': customWebsites as BlogDetailArticle,
  'custom-software-development': customSoftware as BlogDetailArticle,
  'business-ai-consultancy': businessAI as BlogDetailArticle,
  'digital-marketing-branding': digitalMarketing as BlogDetailArticle,
};

export const loadBlogArticle = (slug: string): BlogDetailArticle | null => {
  return blogArticlesMap[slug] || null;
};

export const loadAllBlogArticles = (): BlogDetailArticle[] => {
  return Object.values(blogArticlesMap);
};


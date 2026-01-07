import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { loadBlogArticle, loadAllBlogArticles } from "../utils/blogLoader";
import { BlogDetailArticle, BlogArticle } from "../components/types/blog";
import { BlogDetailHeader } from "../components/organisms/BlogDetailHeader";
import { BlogContent } from "../components/organisms/BlogContent";
import { TableOfContents } from "../components/molecules/TableOfContents";
import { SocialShare } from "../components/molecules/SocialShare";
import { RelatedArticles } from "../components/organisms/RelatedArticles";

const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<BlogDetailArticle | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<BlogArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) {
      navigate("/blog");
      return;
    }

    const loadedArticle = loadBlogArticle(slug);
    if (!loadedArticle) {
      navigate("/blog");
      return;
    }

    setArticle(loadedArticle);

    const allArticles = loadAllBlogArticles();
    const related: BlogArticle[] = allArticles
      .filter((a) => a.id !== loadedArticle.id)
      .slice(0, 3)
      .map((a) => ({
        id: a.id,
        imageUrl: a.imageUrl,
        imageAlt: a.imageAlt,
        date: a.date,
        category: a.category,
        title: a.title,
        author: a.author,
        link: `/blog/${a.slug}`,
      }));

    setRelatedArticles(related);
    setLoading(false);
  }, [slug, navigate]);

  if (loading || !article) {
    return (
      <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center transition-colors duration-300">
        <p className="text-gray-600 dark:text-gray-400">Loading...</p>
      </div>
    );
  }

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <BlogDetailHeader article={article} />

        {/* Main Article Image */}
        <div className="mb-12 rounded-2xl overflow-hidden">
          <img
            src={article.imageUrl}
            alt={article.imageAlt}
            className="w-full h-[50vh] object-cover"
          />
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left Column - Table of Contents */}
          <aside className="lg:col-span-1">
            <div className="sticky top-8">
              <TableOfContents items={article.tableOfContents} />
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
                <SocialShare url={currentUrl} title={article.title} />
              </div>
            </div>
          </aside>

          {/* Right Column - Article Content */}
          <div className="lg:col-span-2">
            <BlogContent content={article.content} />
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <RelatedArticles articles={relatedArticles} currentArticleId={article.id} />
    </div>
  );
};

export default BlogDetail;

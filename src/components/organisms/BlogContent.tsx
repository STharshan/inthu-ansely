import React from "react";
import { BlogContentBlock } from "../types/blog";

interface BlogContentProps {
  content: BlogContentBlock[];
  className?: string;
}

export const BlogContent: React.FC<BlogContentProps> = ({ content, className = "" }) => {
  const renderContent = (block: BlogContentBlock, index: number) => {
    const id =
      block.type === "heading" && block.text
        ? block.text
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-|-$/g, "")
        : undefined;

    switch (block.type) {
      case "intro":
        return (
          <p
            key={index}
            className="text-xl sm:text-2xl font-medium leading-relaxed mb-8 text-gray-900 dark:text-white transition-colors duration-300"
          >
            {block.text}
          </p>
        );
      case "heading":
        const headingLevel = block.level || 2;
        const headingTag = `h${headingLevel}` as "h2" | "h3" | "h4";
        return React.createElement(
          headingTag,
          {
            key: index,
            id: id,
            className:
              "text-2xl sm:text-3xl font-bold mt-12 mb-6 first:mt-0 text-black dark:text-white transition-colors duration-300",
          },
          block.text
        );
      case "paragraph":
        return (
          <p
            key={index}
            className="text-base sm:text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300 transition-colors duration-300"
          >
            {block.text}
          </p>
        );
      default:
        return null;
    }
  };

  return (
    <article className={className}>
      {content.map((block, index) => renderContent(block, index))}
    </article>
  );
};

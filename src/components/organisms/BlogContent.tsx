import React from "react";
import { Link } from "react-router-dom";
import { BlogContentBlock } from "../types/blog";

interface BlogContentProps {
  content: BlogContentBlock[];
  className?: string;
}

export const BlogContent: React.FC<BlogContentProps> = ({ content, className = "" }) => {
  // Parse markdown-style links [text](/blog/slug) and convert to React Router Links
  const parseLinks = (text: string): React.ReactNode[] => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      // Add text before the link
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }

      // Add the link
      const linkText = match[1];
      const linkUrl = match[2];
      
      if (linkUrl.startsWith('/blog/')) {
        parts.push(
          <Link
            key={match.index}
            to={linkUrl}
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline transition-colors duration-300"
          >
            {linkText}
          </Link>
        );
      } else {
        parts.push(
          <a
            key={match.index}
            href={linkUrl}
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline transition-colors duration-300"
            target={linkUrl.startsWith('http') ? '_blank' : undefined}
            rel={linkUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            {linkText}
          </a>
        );
      }

      lastIndex = linkRegex.lastIndex;
    }

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : [text];
  };

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
            {parseLinks(block.text)}
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
            {parseLinks(block.text)}
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

import React from "react";
import { Tag } from "../atoms/Tag";

interface ServiceTagsProps {
  tags: string[];
  className?: string;
}

export const ServiceTags: React.FC<ServiceTagsProps> = ({ tags, className = "" }) => {
  if (!tags || tags.length === 0) return null;

  const midPoint = Math.ceil(tags.length / 2);
  const topRowTags = tags.slice(0, midPoint);
  const bottomRowTags = tags.slice(0, midPoint);

  const createInfiniteTags = (tagArray: string[]) => {
    return [...tagArray, ...tagArray, ...tagArray, ...tagArray];
  };

  return (
    <div className={`overflow-hidden ${className}`}>
      {/* Top Row - Scrolls Left */}
      <div className="flex gap-3 mb-3 w-fit animate-scroll-left">
        {createInfiniteTags(topRowTags).map((tag, index) => (
          <Tag key={`top-${index}`} showIcon={index % topRowTags.length === 0}>
            {tag}
          </Tag>
        ))}
      </div>

      {/* Bottom Row - Scrolls Right */}
      <div className="flex gap-3 w-fit animate-scroll-right">
        {createInfiniteTags(bottomRowTags).map((tag, index) => (
          <Tag key={`bottom-${index}`} showIcon={index % bottomRowTags.length === 0}>
            {tag}
          </Tag>
        ))}
      </div>
    </div>
  );
};

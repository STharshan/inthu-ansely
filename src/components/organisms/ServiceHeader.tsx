import React from "react";
import { Tag } from "../atoms/Tag";
import { TopicButtonGroup } from "../molecules/TopicButtonGroup";
import { CTAButtonGroup } from "../molecules/CTAButtonGroup";
import { TopicButton, CTAButton } from "../ServicePage/types";

interface ServiceHeaderProps {
  categoryTag?: string;
  heading: string;
  description: string;
  topicButtons?: TopicButton[];
  ctaButtons?: CTAButton[];
  className?: string;
}

export const ServiceHeader: React.FC<ServiceHeaderProps> = ({
  categoryTag,
  heading,
  description,
  topicButtons,
  ctaButtons,
  className = "",
}) => {
  return (
    <div className={`flex flex-col gap-6 ${className}`}>
      {categoryTag && (
        <div>
          <Tag variant="category">{categoryTag}</Tag>
        </div>
      )}

      <div className="flex flex-col gap-4">
        <h1 className="text-5xl sm:text-6xl font-bold text-black dark:text-white transition-colors duration-300">{heading}</h1>
        <p className="text-gray-700 dark:text-white/80 text-lg max-w-2xl transition-colors duration-300">{description}</p>
      </div>

      {topicButtons && topicButtons.length > 0 && <TopicButtonGroup topics={topicButtons} />}

      {ctaButtons && ctaButtons.length > 0 && <CTAButtonGroup buttons={ctaButtons} />}
    </div>
  );
};

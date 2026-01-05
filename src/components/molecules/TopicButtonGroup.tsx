import React from 'react';
import { Tag } from '../atoms/Tag';
import { TopicButton } from '../ServicePage/types';

interface TopicButtonGroupProps {
  topics: TopicButton[];
  className?: string;
}

export const TopicButtonGroup: React.FC<TopicButtonGroupProps> = ({
  topics,
  className = '',
}) => {
  if (!topics || topics.length === 0) return null;

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {topics.map((topic) => (
        <Tag key={topic.id} onClick={topic.onClick}>
          {topic.label}
        </Tag>
      ))}
    </div>
  );
};


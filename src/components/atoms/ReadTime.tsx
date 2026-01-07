import React from 'react';

interface ReadTimeProps {
  time: string;
  className?: string;
}

export const ReadTime: React.FC<ReadTimeProps> = ({ time, className = '' }) => {
  return (
    <span
      className={`text-gray-600 dark:text-gray-400 text-sm font-medium transition-colors duration-300 ${className}`}
    >
      {time}
    </span>
  );
};


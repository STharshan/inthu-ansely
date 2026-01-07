import React from 'react';

interface StatisticCardProps {
  value: string;
  label: string;
  className?: string;
}

export const StatisticCard: React.FC<StatisticCardProps> = ({
  value,
  label,
  className = '',
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <span className="text-gray-900 dark:text-white text-4xl sm:text-5xl font-bold mb-2 transition-colors duration-300">
        {value}
      </span>
      <span className="text-gray-700 dark:text-white text-sm sm:text-base transition-colors duration-300">{label}</span>
    </div>
  );
};


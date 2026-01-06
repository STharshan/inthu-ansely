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
      <span className="text-white text-4xl sm:text-5xl font-bold mb-2">
        {value}
      </span>
      <span className="text-white text-sm sm:text-base">{label}</span>
    </div>
  );
};


import React from "react";
import { Statistic } from "../types/clientReviews";
import { StatisticCard } from "../atoms/StatisticCard";

interface StatisticsGridProps {
  statistics: Statistic[];
  className?: string;
}

export const StatisticsGrid: React.FC<StatisticsGridProps> = ({ statistics, className = "" }) => {
  if (!statistics || statistics.length === 0) return null;

  return (
    <div
      className={`bg-gray-50 dark:bg-[#0D0D0D] rounded-[20px] p-4 sm:p-8 transition-colors duration-300 ${className}`}
      style={{
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
      }}
      onMouseEnter={(e) => {
        if (document.documentElement.classList.contains('dark')) {
          e.currentTarget.style.boxShadow = "rgba(0, 0, 0, 0.4) 16px 24px 20px 8px";
        } else {
          e.currentTarget.style.boxShadow = "rgba(0, 0, 0, 0.15) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -2px";
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px";
      }}
    >
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-8 sm:gap-12">
        {statistics.map((stat, index) => (
          <React.Fragment key={stat.id}>
            <StatisticCard value={stat.value} label={stat.label} className="flex-1 text-center" />
            {index < statistics.length - 1 && (
              <div className="hidden sm:block w-px h-full min-h-[60px] bg-gray-200 dark:bg-white/10 transition-colors duration-300" />
            )}
            {index < statistics.length - 1 && (
              <div className="block sm:hidden w-full h-px bg-gray-200 dark:bg-white/10 transition-colors duration-300" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

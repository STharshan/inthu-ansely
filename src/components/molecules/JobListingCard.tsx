import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronDown } from "lucide-react";
import { JobListingCardProps } from "../types/careers";
import { JobIcon } from "../atoms/JobIcon";

export const JobListingCard: React.FC<JobListingCardProps> = ({
  job,
  isOpen,
  onToggle,
  className = "",
}) => {
  return (
    <div
      className={`cursor-pointer ${className}`}
      tabIndex={0}
      onClick={onToggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggle();
        }
      }}
      role="button"
      aria-expanded={isOpen}
      aria-label={`${job.title} - ${
        isOpen ? "Collapse" : "Expand"
      } job details`}
    >
      <div
        className="bg-white dark:bg-[#0D0D0D] rounded-xl w-full py-5 px-6 transition-colors duration-300"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
        }}
        onMouseEnter={(e) => {
          if (document.documentElement.classList.contains("dark")) {
            e.currentTarget.style.boxShadow =
              "rgba(0, 0, 0, 0.4) 5px 18px 10px 8px";
          } else {
            e.currentTarget.style.boxShadow =
              "rgba(0, 0, 0, 0.15) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -2px";
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow =
            "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px";
        }}
      >
        {/* Header with title and chevron */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1">
            {isOpen ? (
              <ChevronDown className="text-[#0045EF] dark:text-blue-400 transition-colors duration-300 w-5 h-5 flex-shrink-0" />
            ) : (
              <ChevronRight className="text-[#0045EF] dark:text-blue-400 transition-colors duration-300 w-5 h-5 flex-shrink-0" />
            )}
            <h3 className="text-gray-900 dark:text-white font-semibold text-lg transition-colors duration-300">
              {job.title}
            </h3>
          </div>
        </div>

        {/* Location and Employment Type */}
        <div className="flex items-center gap-2 mt-3 ml-8">
          <div className="flex items-center gap-1.5">
            <JobIcon type="location" size={14} />
            <span className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">
              {job.location}
            </span>
          </div>
          <span className="text-gray-400 dark:text-gray-500 mx-1">-</span>
          <div className="flex items-center gap-1.5">
            <JobIcon type="employment" size={14} />
            <span className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">
              {job.employmentType}
            </span>
          </div>
        </div>

        {/* Description (when expanded) */}
        {isOpen && (
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
            <p className="text-gray-700 dark:text-white/80 text-sm leading-relaxed mb-4 transition-colors duration-300">
              {job.description}
            </p>
            <Link
              to={`/careers/${job.id}`}
              className="text-[#0045EF] dark:text-blue-400 font-medium hover:underline transition-colors duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              Apply Now
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

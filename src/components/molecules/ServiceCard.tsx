import React from "react";
import { ServiceCard as ServiceCardType } from "../ServicePage/types";

interface ServiceCardProps {
  card: ServiceCardType;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ card, className = "" }) => {
  const Icon = card.icon;

  return (
    <div
      className={`w-full bg-gray-50 dark:bg-[#0D0D0D] rounded-[20px] will-change-transform opacity-100 p-6 transition-colors duration-300 ${className}`}
      style={{
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
      }}
      onMouseEnter={(e) => {
        if (document.documentElement.classList.contains("dark")) {
          e.currentTarget.style.boxShadow = "rgba(0, 0, 0, 0.4) 16px 24px 20px 8px";
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
      <div className="opacity-100">
        {/* Heading & Icon */}
        <div className="opacity-100 flex items-center gap-4 mb-4">
          <div className="w-6 h-6 flex items-center justify-center">
            <Icon
              className="text-gray-900 dark:text-white opacity-100 transition-colors duration-300"
              size={24}
            />
          </div>
          <h4 className="text-gray-900 dark:text-white font-semibold text-lg transition-colors duration-300">
            {card.title}
          </h4>
        </div>

        {/* Line Divider */}
        <div className="w-full mb-4 h-px bg-gray-200 dark:bg-white/10 transition-colors duration-300" />

        {/* Description */}
        <p className="text-gray-700 dark:text-white text-sm leading-relaxed text-left transition-colors duration-300">
          {card.description}
        </p>
      </div>
    </div>
  );
};

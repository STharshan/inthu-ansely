import React from "react";
import { MapPin, Clock, LucideIcon } from "lucide-react";

interface JobIconProps {
  type: "location" | "employment";
  className?: string;
  size?: number;
}

export const JobIcon: React.FC<JobIconProps> = ({
  type,
  className = "",
  size = 16,
}) => {
  const Icon: LucideIcon = type === "location" ? MapPin : Clock;

  return (
    <Icon
      className={`text-[#0045EF] dark:text-blue-400 transition-colors duration-300 ${className}`}
      size={size}
    />
  );
};

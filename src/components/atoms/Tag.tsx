import React from "react";
import { CircleDot } from "lucide-react";

interface TagProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  showIcon?: boolean;
  variant?: "default" | "category";
}

const MigrationIcon: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    className={className}
    role="presentation"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 8L3 12L7 16M17 8L21 12L17 16M14 4L10 20"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Tag: React.FC<TagProps> = ({
  children,
  className = "",
  onClick,
  showIcon = false,
  variant = "default",
}) => {
  if (variant === "category") {
    return (
      <div
        className={`${onClick ? "cursor-pointer" : "cursor-default"} opacity-100 ${className}`}
        onClick={onClick}
        style={{
          transform: "none",
          willChange: "transform",
        }}
      >
        <div
          className="bg-[#0D0D0D] rounded-[20px] opacity-100 py-2.5 px-4 inline-flex items-center gap-2.5"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.4) 16px 24px 20px 8px, rgba(184, 180, 180, 0.08) 0px 2px 0px 0px inset",
          }}
        >
          <CircleDot className="text-white" size={20} strokeWidth={1.5} />
          <p className="text-white text-sm font-medium whitespace-nowrap uppercase">{children}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`h-[51px] flex-shrink-0 ${
        onClick ? "cursor-pointer" : "cursor-default"
      } ${className}`}
      onClick={onClick}
    >
      <div className="bg-[#0D0D0D] rounded-full opacity-100 flex items-center gap-2 px-4 h-full transition-all duration-300 hover:opacity-90 will-change-transform">
        {showIcon && <MigrationIcon className="w-5 h-5 text-white opacity-80 flex-shrink-0" />}
        <p className="text-white text-sm font-medium whitespace-nowrap">{children}</p>
      </div>
    </div>
  );
};

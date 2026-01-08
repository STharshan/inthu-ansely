import React from 'react';
import { Heart } from 'lucide-react';

interface CategoryTagWithIconProps {
  children: React.ReactNode;
  className?: string;
  icon?: React.ComponentType<{ className?: string; size?: number }>;
}

export const CategoryTagWithIcon: React.FC<CategoryTagWithIconProps> = ({
  children,
  className = '',
  icon: Icon = Heart,
}) => {
  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-[#0D0D0D] border border-gray-200 dark:border-white/10 transition-colors duration-300 ${className}`}
      style={{
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
      }}
    >
      <Icon className="text-gray-900 dark:text-white transition-colors duration-300" size={16} />
      <span className="text-gray-900 dark:text-white text-xs font-medium uppercase tracking-wider transition-colors duration-300">
        {children}
      </span>
    </div>
  );
};

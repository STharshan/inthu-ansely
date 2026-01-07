import React from 'react';
import { Plus } from 'lucide-react';
import { FAQItem } from '../types/faq';

interface FAQAccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}

export const FAQAccordionItem: React.FC<FAQAccordionItemProps> = ({
  item,
  isOpen,
  onToggle,
  className = '',
}) => {
  return (
    <div
      className={`cursor-pointer opacity-100 ${className}`}
      tabIndex={0}
      onClick={onToggle}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onToggle();
        }
      }}
    >
      <div
        className="bg-gray-50 dark:bg-[#0F0F0F] rounded-[15px] w-full opacity-100 py-5 px-6 transition-colors duration-300"
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
        }}
        onMouseEnter={(e) => {
          if (document.documentElement.classList.contains('dark')) {
            e.currentTarget.style.boxShadow = 'rgba(0, 0, 0, 0.4) 5px 18px 10px 8px';
          } else {
            e.currentTarget.style.boxShadow = 'rgba(0, 0, 0, 0.15) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -2px';
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px';
        }}
      >
        {/* Question */}
        <div className="opacity-100 flex items-center justify-between gap-4">
          <p className="text-gray-900 dark:text-white font-medium text-base sm:text-lg flex-1 text-left transition-colors duration-300">
            {item.question}
          </p>
          <div className="w-5 h-5 flex-shrink-0">
            <Plus
              className={`text-gray-900 dark:text-white transition-all duration-300 w-5 h-5 ${
                isOpen ? 'rotate-45' : ''
              }`}
            />
          </div>
        </div>

        {/* Answer */}
        {isOpen && (
          <div className="opacity-100 mt-4 pt-4 border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
            <p className="text-gray-700 dark:text-white/80 text-sm leading-relaxed text-left transition-colors duration-300">
              {item.answer}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};


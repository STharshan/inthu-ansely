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
        className="bg-[#0F0F0F] rounded-[15px] w-full opacity-100 py-5 px-6"
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 5px 18px 10px 8px',
        }}
      >
        {/* Question */}
        <div className="opacity-100 flex items-center justify-between gap-4">
          <p className="text-white font-medium text-base sm:text-lg flex-1 text-left">
            {item.question}
          </p>
          <div className="w-5 h-5 flex-shrink-0">
            <Plus
              className={`text-white transition-transform duration-300 w-5 h-5 ${
                isOpen ? 'rotate-45' : ''
              }`}
            />
          </div>
        </div>

        {/* Answer */}
        {isOpen && (
          <div className="opacity-100 mt-4 pt-4 border-t border-white/10">
            <p className="text-white/80 text-sm leading-relaxed text-left">
              {item.answer}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};


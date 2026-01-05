import React, { useState } from 'react';
import { FAQItem } from '../types/faq';
import { FAQAccordionItem } from './FAQAccordionItem';

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  items,
  className = '',
}) => {
  const [openItemId, setOpenItemId] = useState<string | null>(
    items.length > 0 ? items[0].id : null
  );

  const handleToggle = (itemId: string) => {
    setOpenItemId(openItemId === itemId ? null : itemId);
  };

  return (
    <div className={`space-y-4 ${className}`} style={{ width: '100%', opacity: 1 }}>
      {items.map((item) => (
        <FAQAccordionItem
          key={item.id}
          item={item}
          isOpen={openItemId === item.id}
          onToggle={() => handleToggle(item.id)}
        />
      ))}
    </div>
  );
};


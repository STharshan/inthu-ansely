import React from 'react';

interface TableOfContentsProps {
  items: string[];
  className?: string;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  items,
  className = '',
}) => {
  const scrollToSection = (item: string) => {
    const id = item.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={className}>
      <h3 className="text-sm font-semibold uppercase tracking-wider mb-6 text-gray-900 dark:text-white transition-colors duration-300">
        TABLE OF CONTENTS
      </h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index}>
            <button
              onClick={() => scrollToSection(item)}
              className="text-left text-sm text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300"
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};


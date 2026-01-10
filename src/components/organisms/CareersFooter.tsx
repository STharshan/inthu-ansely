import React from 'react';
import { CareersFooterProps } from '../types/careers';
import { careersConfig } from '../../constants/careers';

export const CareersFooter: React.FC<CareersFooterProps> = ({
  className = '',
}) => {
  const messageParts = careersConfig.contactMessage.split('{email}');

  return (
    <section
      className={`bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 ${className}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-black dark:text-white transition-colors duration-300">
          {careersConfig.contactQuestion}
        </h2>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-2 transition-colors duration-300">
          {messageParts[0]}
          <a
            href={`mailto:${careersConfig.contactEmail}`}
            className="text-brand-blue dark:text-brand-blue-light hover:underline transition-colors duration-300"
          >
            {careersConfig.contactEmail}
          </a>
          {messageParts[1]}
        </p>
      </div>
    </section>
  );
};

import React from 'react';
import { JobPosition } from '../types/careers';
import { careersConfig } from '../../constants/careers';

interface CareerDetailContentProps {
  job: JobPosition;
  className?: string;
}

export const CareerDetailContent: React.FC<CareerDetailContentProps> = ({
  job,
  className = '',
}) => {
  const parseHighlightedText = (text: string): React.ReactNode[] => {
    // Highlight phrases that match common patterns (this is a simple implementation)
    // In a real scenario, you might want to mark these in the data
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    
    // Simple pattern matching for demonstration
    const highlightPatterns = [
      /nunc euismod/gi,
      /Auctor et ornare sapien/gi,
      /enim facilisis gravida/gi,
      /pulvinar neque laoreet/gi,
    ];

    let matches: Array<{ index: number; length: number; text: string }> = [];
    
    highlightPatterns.forEach((pattern) => {
      let match;
      while ((match = pattern.exec(text)) !== null) {
        matches.push({
          index: match.index,
          length: match[0].length,
          text: match[0],
        });
      }
    });

    // Sort matches by index
    matches.sort((a, b) => a.index - b.index);

    // Remove overlapping matches
    const nonOverlapping: typeof matches = [];
    matches.forEach((match) => {
      const overlaps = nonOverlapping.some(
        (existing) =>
          (match.index >= existing.index &&
            match.index < existing.index + existing.length) ||
          (existing.index >= match.index &&
            existing.index < match.index + match.length)
      );
      if (!overlaps) {
        nonOverlapping.push(match);
      }
    });

    // Build parts array
    nonOverlapping.forEach((match) => {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      parts.push(
        <span
          key={match.index}
          className="text-brand-blue dark:text-brand-blue-light font-medium"
        >
          {match.text}
        </span>
      );
      lastIndex = match.index + match.length;
    });

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : [text];
  };

  return (
    <section
      className={`bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 ${className}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Job Description Card */}
        <div className="bg-white dark:bg-brand-dark rounded-t-[24px] sm:rounded-t-[32px] shadow-xl -mt-16 sm:-mt-24 relative z-10 p-6 sm:p-8 lg:p-12 transition-colors duration-300">
          {/* About this position */}
          {job.aboutPosition && (
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-black dark:text-white transition-colors duration-300">
                About this position
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 transition-colors duration-300">
                {parseHighlightedText(job.aboutPosition)}
              </p>
            </div>
          )}

          {/* Responsibilities */}
          {job.responsibilities && job.responsibilities.length > 0 && (
            <div className="mb-8">
              <ul className="space-y-3">
                {job.responsibilities.map((responsibility, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 transition-colors duration-300"
                  >
                    <span className="text-brand-blue dark:text-brand-blue-light font-bold mt-1 flex-shrink-0">
                      •
                    </span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Company Description */}
          {job.companyDescription && (
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-black dark:text-white transition-colors duration-300">
                Come and join one of the fastest growing startups!
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 transition-colors duration-300">
                {parseHighlightedText(job.companyDescription)}
              </p>
            </div>
          )}

          {/* Additional Info */}
          {job.additionalInfo && (
            <div className="mb-8">
              <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 transition-colors duration-300">
                {parseHighlightedText(job.additionalInfo)}
              </p>
            </div>
          )}

          {/* Apply Button */}
          <div className="mt-12 text-center">
            <a
              href={`mailto:${careersConfig.applyEmail}?subject=Application for ${job.title}`}
              className="inline-block px-8 py-4 bg-brand-blue hover:bg-brand-blue-hover text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Apply for this position
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Twitter, Linkedin, Mail } from 'lucide-react';

interface SocialShareProps {
  url: string;
  title: string;
  className?: string;
}

export const SocialShare: React.FC<SocialShareProps> = ({
  url,
  title,
  className = '',
}) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
  };

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300">
        Share
      </span>
      <div className="flex items-center gap-3">
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
          aria-label="Share on Twitter"
        >
          <Twitter size={18} />
        </a>
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
          aria-label="Share on LinkedIn"
        >
          <Linkedin size={18} />
        </a>
        <a
          href={shareLinks.email}
          className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
          aria-label="Share via Email"
        >
          <Mail size={18} />
        </a>
      </div>
    </div>
  );
};


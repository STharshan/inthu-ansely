import React from 'react';

interface AuthorAvatarProps {
  src: string;
  alt: string;
  size?: number;
  className?: string;
}

export const AuthorAvatar: React.FC<AuthorAvatarProps> = ({
  src,
  alt,
  size = 40,
  className = '',
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`rounded-full object-cover flex-shrink-0 ${className}`}
      style={{ width: size, height: size }}
      loading="lazy"
      decoding="async"
    />
  );
};


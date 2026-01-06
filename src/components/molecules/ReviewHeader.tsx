import React from 'react';
import { Tag } from '../atoms/Tag';
import { Button } from '../atoms/Button';
import { CTAButton } from '../ServicePage/types';

interface ReviewHeaderProps {
  categoryTag?: string;
  reviewCount?: string;
  heading: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right';
  ctaButtons?: CTAButton[];
  className?: string;
}

export const ReviewHeader: React.FC<ReviewHeaderProps> = ({
  categoryTag,
  reviewCount,
  heading,
  description,
  imageUrl,
  imageAlt = 'Review illustration',
  imagePosition = 'left',
  ctaButtons,
  className = '',
}) => {
  const imageColumn = (
    <div className="flex items-center justify-center lg:justify-start">
      {imageUrl && (
        <div className="rounded-2xl overflow-hidden border border-white/10 w-full">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-auto object-cover"
          />
        </div>
      )}
    </div>
  );

  const contentColumn = (
    <div className="flex flex-col justify-center gap-6">
      {categoryTag && (
        <div>
          <Tag variant="category">{categoryTag}</Tag>
        </div>
      )}

      <div className="flex flex-col gap-4">
        <h1 className="text-5xl sm:text-6xl font-bold text-white">{heading}</h1>
        <p className="text-white/80 text-lg max-w-2xl">{description}</p>
      </div>

      {ctaButtons && ctaButtons.length > 0 && (
        <div className="flex flex-wrap gap-4">
          {ctaButtons.map((button) => (
            <Button
              key={button.id}
              href={button.href}
              onClick={button.onClick}
              variant={button.variant || 'secondary'}
            >
              {button.label}
            </Button>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 ${className}`}>
      {imagePosition === 'left' ? (
        <>
          {imageColumn}
          {contentColumn}
        </>
      ) : (
        <>
          {contentColumn}
          {imageColumn}
        </>
      )}
    </div>
  );
};


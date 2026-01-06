import { CTAButton } from '../ServicePage/types';

export interface ClientReview {
  id: string;
  name: string;
  title: string;
  quote: string;
  rating: number;
  avatarUrl?: string;
}

export interface Statistic {
  id: string;
  value: string;
  label: string;
}

export interface ClientReviewsProps {
  categoryTag?: string;
  reviewCount?: string;
  heading: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right';
  ctaButtons?: CTAButton[];
  reviews: ClientReview[];
  statistics?: Statistic[];
  className?: string;
}


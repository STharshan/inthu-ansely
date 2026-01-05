export interface ServiceCard {
  id: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  title: string;
  description: string;
}

export interface TopicButton {
  id: string;
  label: string;
  onClick?: () => void;
}

export interface CTAButton {
  id: string;
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export interface ServicePageProps {
  categoryTag?: string;
  heading: string;
  description: string;
  topicButtons?: TopicButton[];
  ctaButtons?: CTAButton[];
  imageUrl?: string;
  imageAlt?: string;
  serviceCards: ServiceCard[];
  serviceTags?: string[];
  className?: string;
}


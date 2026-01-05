export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQSectionProps {
  categoryTag?: string;
  heading: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
  serviceTags?: string[];
  ctaButton?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  faqItems: FAQItem[];
  className?: string;
}


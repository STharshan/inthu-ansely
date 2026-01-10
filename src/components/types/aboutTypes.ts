// Types for About Page Components

export interface AboutHeroProps {
  subtitle?: string;
  title?: string;
  description?: string;
  heroImage?: string;
  backgroundImage?: string;
}

export interface Achievement {
  number: string;
  title: string;
  description: string;
}

export interface AchievementsProps {
  achievements?: Achievement[];
}

export interface OurStoryProps {
  subtitle?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  image1?: string;
  image2?: string;
}

export interface CoreValue {
  key: string;
  heading: string;
  lines: string[];
}

export interface OurValuesProps {
  subtitle?: string;
  title?: string;
  description?: string;
  values?: CoreValue[];
}

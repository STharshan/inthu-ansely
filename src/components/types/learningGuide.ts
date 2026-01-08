export interface LearningGuideCard {
  id: string;
  title: string;
  description: string;
  href: string;
}

export interface LearningGuideProps {
  service: 'custom-software' | 'ai-consulting' | 'digital-marketing';
  className?: string;
}

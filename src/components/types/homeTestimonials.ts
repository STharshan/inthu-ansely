export interface HomeTestimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatarUrl: string;
}

export interface HomeTestimonialsSectionProps {
  testimonials: HomeTestimonial[];
  className?: string;
}

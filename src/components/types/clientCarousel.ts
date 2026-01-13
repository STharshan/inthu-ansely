export interface ClientLogo {
  id: string;
  name: string;
  logoUrl: string;
  websiteUrl?: string;
}

export interface ClientCarouselProps {
  clients: ClientLogo[];
  className?: string;
  heading?: string;
  showHeading?: boolean;
}

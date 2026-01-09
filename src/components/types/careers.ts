export interface JobPosition {
  id: string;
  title: string;
  location: string;
  employmentType: string;
  description: string;
  applyUrl?: string;
  aboutPosition?: string;
  responsibilities?: string[];
  companyDescription?: string;
  additionalInfo?: string;
}

export interface CareersHeaderProps {
  className?: string;
}

export interface JobListingCardProps {
  job: JobPosition;
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}

export interface CareersJobListingsProps {
  jobs: JobPosition[];
  className?: string;
}

export interface CareersFooterProps {
  className?: string;
}

export interface CareersPageProps {
  className?: string;
}

export interface CareerDetailProps {
  className?: string;
}

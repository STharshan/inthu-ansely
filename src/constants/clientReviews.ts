import { ClientReview, Statistic } from "../components/types/clientReviews";

export const sampleClientReviews: ClientReview[] = [
  {
    id: "sarah-johnson",
    name: "Sarah Johnson",
    title: "Product Designer at DesignCo",
    quote:
      "Working with this platform has completely transformed how we approach product development. The tools are intuitive and powerful.",
    rating: 5,
    avatarUrl: "/w8.png",
  },
  {
    id: "michael-davis",
    name: "Michael Davis",
    title: "Engineering Lead at TechStart",
    quote:
      "The technical architecture and scalability options provided exceeded our expectations. Deployment was seamless.",
    rating: 5,
    avatarUrl: "/w12.png",
  },
  {
    id: "emma-wilson",
    name: "Emma Wilson",
    title: "CEO of Innovate",
    quote:
      "This solution helped us scale from startup to enterprise level. The support team is always there when we need them.",
    rating: 5,
    avatarUrl: "/w11.png",
  },
  {
    id: "jonas-klein",
    name: "Jonas Klein",
    title: "Growth Hacker at Brava",
    quote:
      "Platform Labs' ability to simplify complex AI workflows was a game changer. We now deploy new features faster, with confidence and traceability.",
    rating: 5,
    avatarUrl: "/w13.png",
  },
  {
    id: "sophia-martinez",
    name: "Sophia Martinez",
    title: "Marketing Director at GrowthLabs",
    quote:
      "The analytics and insights we get from this platform have been instrumental in driving our marketing strategy forward.",
    rating: 5,
    avatarUrl: "/w9.png",
  },
  {
    id: "david-chen",
    name: "David Chen",
    title: "CTO of DataFlow",
    quote:
      "Security and performance were our top priorities. This platform delivered on both fronts without compromise.",
    rating: 5,
    avatarUrl: "/w14.png",
  },
];

export const sampleStatistics: Statistic[] = [
  {
    id: "projects",
    value: "180+",
    label: "design projects completed.",
  },
  {
    id: "satisfaction",
    value: "96%",
    label: "Client satisfaction rate.",
  },
  {
    id: "experience",
    value: "15+",
    label: "Years of experience",
  },
];

export const digitalTransformationClientReviewsConfig = {
  categoryTag: "00 Reviews",
  reviewCount: "00 Reviews",
  heading: "Client Reviews",
  description:
    "Real feedback from clients who trusted my design expertise to elevate their brands successfully.",
  imageUrl: "/d1.avif",
  imageAlt: "Client reviews illustration",
  imagePosition: "left" as const,
};

// Reuse the same reviews and statistics for all services
export const digitalPartnershipsClientReviewsConfig = {
  categoryTag: "00 Reviews",
  reviewCount: "00 Reviews",
  heading: "Client Reviews",
  description:
    "Real feedback from clients who trusted our partnership expertise to expand their market reach and capabilities.",
  imageUrl: "/d1.avif",
  imageAlt: "Client reviews illustration",
  imagePosition: "left" as const,
};

export const customWebsitesClientReviewsConfig = {
  categoryTag: "00 Reviews",
  reviewCount: "00 Reviews",
  heading: "Client Reviews",
  description:
    "Real feedback from clients who trusted our web development expertise to create exceptional online experiences.",
  imageUrl: "/d1.avif",
  imageAlt: "Client reviews illustration",
  imagePosition: "left" as const,
};

export const customSoftwareClientReviewsConfig = {
  categoryTag: "00 Reviews",
  reviewCount: "00 Reviews",
  heading: "Client Reviews",
  description:
    "Real feedback from clients who trusted our software development expertise to build scalable solutions.",
  imageUrl: "/d1.avif",
  imageAlt: "Client reviews illustration",
  imagePosition: "left" as const,
};

export const businessConsultancyClientReviewsConfig = {
  categoryTag: "00 Reviews",
  reviewCount: "00 Reviews",
  heading: "Client Reviews",
  description:
    "Real feedback from clients who trusted our consultancy expertise to optimize their business operations.",
  imageUrl: "/d1.avif",
  imageAlt: "Client reviews illustration",
  imagePosition: "left" as const,
};

export const digitalMarketingClientReviewsConfig = {
  categoryTag: "00 Reviews",
  reviewCount: "00 Reviews",
  heading: "Client Reviews",
  description:
    "Real feedback from clients who trusted our marketing expertise to elevate their brand and drive growth.",
  imageUrl: "/d1.avif",
  imageAlt: "Client reviews illustration",
  imagePosition: "left" as const,
};

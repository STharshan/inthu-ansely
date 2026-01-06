import { ClientReview, Statistic } from "../components/types/clientReviews";

export const sampleClientReviews: ClientReview[] = [
  {
    id: "richards-johnson",
    name: "Richards Johnson",
    title: "Creative Director & Lead Designer",
    quote:
      "Working with Melly was a seamless experience. Her ability to merge creativity with functionality resulted in designs that not only looked stunning but also drove meaningful engagement. Highly recommended!",
    rating: 5,
    avatarUrl: undefined,
  },
  {
    id: "june-lee",
    name: "June Lee",
    title: "CEO of GreenRoots",
    quote:
      "Meily's strategic approach to design brought our brand vision to life. The packaging and brand elements she developed elevated our aesthetic and aligned perfectly with our sustainability values.",
    rating: 5,
    avatarUrl: undefined,
  },
  {
    id: "jona-carter",
    name: "Jona Carter",
    title: "Founder of EcoLux",
    quote:
      "Every project Melly touches becomes a perfect blend of design and purpose that reflected our eco-conscious values. Our products stand out on shelves and resonate with our target audience.",
    rating: 5,
    avatarUrl: undefined,
  },
  {
    id: "michael-chen",
    name: "Michael Chen",
    title: "CTO of TechFlow Solutions",
    quote:
      "The digital transformation strategy provided by Ansely revolutionized our operations. Their technical expertise and strategic vision helped us achieve 40% efficiency gains in just six months.",
    rating: 5,
    avatarUrl: undefined,
  },
  {
    id: "sarah-martinez",
    name: "Sarah Martinez",
    title: "Marketing Director at BrandVibe",
    quote:
      "Ansely delivered exceptional results for our digital marketing campaigns. Their data-driven approach and creative strategies increased our online engagement by 250% and significantly boosted our ROI.",
    rating: 5,
    avatarUrl: undefined,
  },
  {
    id: "david-thompson",
    name: "David Thompson",
    title: "CEO of InnovateNow",
    quote:
      "Working with Ansely was a game-changer for our business. Their custom software solution streamlined our entire workflow, reducing manual processes and enabling us to scale rapidly.",
    rating: 5,
    avatarUrl: undefined,
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

export const digitalTransformationClientReviews: ClientReview[] = sampleClientReviews;

export const digitalTransformationStatistics: Statistic[] = sampleStatistics;

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

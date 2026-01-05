import {
  FaChartLine,
  FaCloud,
  FaMobileAlt,
  FaDatabase,
  FaRobot,
  FaShieldAlt,
} from "react-icons/fa";
import { ServiceCard, TopicButton, CTAButton } from "../components/ServicePage/types";

export const digitalTransformationServiceCards: ServiceCard[] = [
  {
    id: "digital-strategy",
    icon: FaChartLine,
    title: "Digital Strategy",
    description:
      "Crafting comprehensive digital strategies that align with your business goals and drive measurable results.",
  },
  {
    id: "cloud-migration",
    icon: FaCloud,
    title: "Cloud Migration",
    description:
      "Seamlessly migrating your infrastructure to the cloud for enhanced scalability, security, and cost efficiency.",
  },
  {
    id: "mobile-transformation",
    icon: FaMobileAlt,
    title: "Mobile Transformation",
    description:
      "Enabling mobile-first experiences that engage customers and empower your workforce on any device.",
  },
  {
    id: "data-modernization",
    icon: FaDatabase,
    title: "Data Modernization",
    description:
      "Transforming data into actionable insights with modern analytics platforms and AI-driven solutions.",
  },
  {
    id: "automation",
    icon: FaRobot,
    title: "Process Automation",
    description:
      "Streamlining operations through intelligent automation that reduces manual work and increases efficiency.",
  },
  {
    id: "security",
    icon: FaShieldAlt,
    title: "Security Enhancement",
    description:
      "Implementing robust security frameworks to protect your digital assets and ensure compliance.",
  },
];

export const digitalTransformationTopicButtons: TopicButton[] = [
  { id: "strategy", label: "Digital Strategy" },
  { id: "cloud", label: "Cloud Solutions" },
  { id: "automation", label: "Process Automation" },
  { id: "analytics", label: "Data Analytics" },
];

export const digitalTransformationCTAButtons: CTAButton[] = [
  {
    id: "book-call",
    label: "Book a Free Call",
    href: "/contact",
    variant: "primary",
  },
  {
    id: "see-projects",
    label: "See Projects",
    href: "/projects",
    variant: "secondary",
  },
];

export const digitalTransformationServiceTags: string[] = [
  "Digital Strategy",
  "Cloud Migration",
  "System Integration",
  "Process Automation",
  "Data Analytics",
  "Mobile Solutions",
  "Security",
  "Compliance",
  "Legacy Modernization",
  "API Development",
  "Microservices",
  "DevOps",
  "CI/CD",
  "Infrastructure",
];

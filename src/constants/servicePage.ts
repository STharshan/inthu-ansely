import { FaRobot, FaHandshake, FaGlobe, FaLaptopCode, FaBrain, FaPalette } from "react-icons/fa";
import { ServiceCard, TopicButton, CTAButton } from "../components/ServicePage/types";

export const digitalTransformationServiceCards: ServiceCard[] = [
  {
    id: "digital-transformation-automation",
    icon: FaRobot,
    title: "Digital Transformation & Smart Automation",
    description:
      "Modernize your business with comprehensive digital transformation strategies and intelligent automation solutions that streamline operations, reduce costs, and drive innovation across your organization.",
  },
  {
    id: "digital-partnerships",
    icon: FaHandshake,
    title: "Digital Partnerships",
    description:
      "Build strategic alliances and channel partnerships that expand your market reach, integrate with leading platforms, and create collaborative opportunities for mutual growth and success.",
  },
  {
    id: "custom-websites",
    icon: FaGlobe,
    title: "Custom Websites",
    description:
      "Create stunning, responsive websites and web applications tailored to your brand that deliver exceptional user experiences, drive conversions, and establish your strong online presence.",
  },
  {
    id: "custom-software-development",
    icon: FaLaptopCode,
    title: "Custom Software Development",
    description:
      "Develop scalable, enterprise-grade software solutions and applications that perfectly align with your business needs, from cloud applications to mobile apps and legacy system modernization.",
  },
  {
    id: "business-ai-consultancy",
    icon: FaBrain,
    title: "Business Consultancy & AI Consultancy",
    description:
      "Get expert strategic guidance on business optimization, AI implementation, and digital transformation to unlock growth opportunities, improve efficiency, and make data-driven decisions.",
  },
  {
    id: "digital-marketing-branding",
    icon: FaPalette,
    title: "Digital Marketing, Branding & Social Media",
    description:
      "Elevate your brand with comprehensive digital marketing strategies, compelling brand identity design, and powerful social media campaigns that engage audiences and drive measurable results.",
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

import { FaRobot, FaHandshake, FaGlobe, FaLaptopCode, FaBrain, FaPalette } from "react-icons/fa";
import { ServiceCard, TopicButton, CTAButton } from "../components/ServicePage/types";

// Shared service cards used across all service pages
export const serviceCards: ServiceCard[] = [
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

// Digital Transformation Constants (keeping for backward compatibility)
export const digitalTransformationServiceCards: ServiceCard[] = serviceCards;

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

// Digital Partnerships Constants
export const digitalPartnershipsTopicButtons: TopicButton[] = [
  { id: "strategic-alliances", label: "Strategic Alliances" },
  { id: "channel-partnerships", label: "Channel Partnerships" },
  { id: "technology-integrations", label: "Technology Integrations" },
  { id: "co-marketing", label: "Co-Marketing" },
];

export const digitalPartnershipsCTAButtons: CTAButton[] = [
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

// Custom Websites Constants
export const customWebsitesTopicButtons: TopicButton[] = [
  { id: "responsive-design", label: "Responsive Design" },
  { id: "ecommerce", label: "E-Commerce" },
  { id: "cms", label: "CMS Development" },
  { id: "seo", label: "SEO Optimization" },
];

export const customWebsitesCTAButtons: CTAButton[] = [
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

// Custom Software Development Constants
export const customSoftwareTopicButtons: TopicButton[] = [
  { id: "enterprise-software", label: "Enterprise Software" },
  { id: "api-development", label: "API Development" },
  { id: "cloud-applications", label: "Cloud Applications" },
  { id: "mobile-apps", label: "Mobile Applications" },
];

export const customSoftwareCTAButtons: CTAButton[] = [
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

// Business Consultancy Constants
export const businessConsultancyTopicButtons: TopicButton[] = [
  { id: "business-strategy", label: "Business Strategy" },
  { id: "ai-consultancy", label: "AI Consultancy" },
  { id: "process-optimization", label: "Process Optimization" },
  { id: "data-strategy", label: "Data Strategy" },
];

export const businessConsultancyCTAButtons: CTAButton[] = [
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

// Digital Marketing Constants
export const digitalMarketingTopicButtons: TopicButton[] = [
  { id: "brand-identity", label: "Brand Identity" },
  { id: "social-media", label: "Social Media Marketing" },
  { id: "content-marketing", label: "Content Marketing" },
  { id: "seo-sem", label: "SEO & SEM" },
];

export const digitalMarketingCTAButtons: CTAButton[] = [
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

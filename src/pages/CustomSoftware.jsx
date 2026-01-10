import React from "react";
import ServicesHero from "../features/services/custom-software/ServicesHero";
import ServiceCard from "../features/services/custom-software/ServiceCard";
import StoryCard from "../features/services/custom-software/StoryCard";
import ServicePageSection from "../features/services/custom-software/ServicePageSection";
import ClientReviewsSection from "../features/services/custom-software/ClientReviewsSection";
import FAQSection from "../features/services/custom-software/FAQSection";
import { LearningGuide } from "../components/organisms/LearningGuide";

const CustomSoftware = () => {
  return (
    <div>
      <ServicesHero />
      <ServiceCard />
      {/* <StoryCard /> */}
      <LearningGuide service="custom-software" />
      <ServicePageSection />
      <ClientReviewsSection />
      <FAQSection />
    </div>
  );
};

export default CustomSoftware;

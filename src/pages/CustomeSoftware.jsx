import React from "react";
import ServicesHero from "../components/CustomeSoftware/ServicesHero";
import ServiceCard from "../components/CustomeSoftware/ServiceCard";
import StoryCard from "../components/CustomeSoftware/StoryCard";
import ServicePageSection from "../components/CustomeSoftware/ServicePageSection";
import ClientReviewsSection from "../components/CustomeSoftware/ClientReviewsSection";
import FAQSection from "../components/CustomeSoftware/FAQSection";
import { LearningGuide } from "../components/organisms/LearningGuide";

const CustomeSoftware = () => {
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

export default CustomeSoftware;

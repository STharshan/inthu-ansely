import React from "react";
import CustomIntroduction from "../features/services/custom-website/CutomIntroduction";
import ProjectChallenges from "../features/services/custom-website/ProjectChallenges";
import ProjectSolution from "../features/services/custom-website/ProjectSolution";
import ProjectDetails from "../features/services/custom-website/CustomWebsiteHero";
// import ViewMoreSection from "../features/services/custom-website/ViewMoreSection";
import ServicePageSection from "../features/services/custom-website/ServicePageSection";
import ClientReviewsSection from "../features/services/custom-website/ClientReviewsSection";
import FAQSection from "../features/services/custom-website/FAQSection";
import Newabout from "../features/home/Newabout";

const CustomWebsite = () => {
  return (
    <div>
      <ProjectDetails />
      <CustomIntroduction />
      <ProjectChallenges />
      <ProjectSolution />
      {/* <ViewMoreSection /> */}
      <Newabout />
      <ServicePageSection />
      <ClientReviewsSection />
      <FAQSection />
    </div>
  );
};

export default CustomWebsite;

import ProjectDetails from "../components/CustomWebsite/CustomWebsiteHero";
import CustomIntroduction from "../components/CustomWebsite/CutomIntroduction";
import ProjectChallenges from "../components/CustomWebsite/ProjectChallenges";
import ProjectSolution from "../components/CustomWebsite/ProjectSolution";
// import ViewMoreSection from "../components/CustomWebsite/ViewMoreSection";
import ServicesSection from "@/components/Home/CardSection";
import ClientReviewsSection from "../components/CustomWebsite/ClientReviewsSection";
import FAQSection from "../components/CustomWebsite/FAQSection";
import Newabout from "../components/Home/Newabout";

const CustomWebsite = () => {
  return (
    <div>
      <ProjectDetails />
      <CustomIntroduction />
      <ProjectChallenges />
      <ProjectSolution />
      <Newabout />
      <ServicesSection />
      <ClientReviewsSection />
      <FAQSection />
    </div>
  );
};

export default CustomWebsite;

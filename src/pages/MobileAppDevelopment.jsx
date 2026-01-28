import ServicesSection from "@/components/Home/CardSection";
import ClientReviewsSection from "../components/MobileAppDevelopment/ClientReviewsSection";
import FAQSection from "../components/MobileAppDevelopment/FAQSection";
import MobileAppAboutSection from "../components/MobileAppDevelopment/MobileAppAboutSection";
import MobileAppFeaturesSection from "../components/MobileAppDevelopment/MobileAppFeatureSection";
import ServicesHero from "../components/MobileAppDevelopment/ServicesHero";

const MobileAppDevelopment = () => {
  return (
    <div>
      <ServicesHero />
      <MobileAppAboutSection />
      <MobileAppFeaturesSection />
      <ServicesSection />
      <ClientReviewsSection />
      <FAQSection />
    </div>
  );
};

export default MobileAppDevelopment;

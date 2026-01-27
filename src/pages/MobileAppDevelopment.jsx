import React from "react";
import ServicesHero from "../components/MobileAppDevelopment/ServicesHero";
import ServicePageSection from "../components/MobileAppDevelopment/ServicePageSection";
import ClientReviewsSection from "../components/MobileAppDevelopment/ClientReviewsSection";
import MobileAppAboutSection from "../components/MobileAppDevelopment/MobileAppAboutSection";
import MobileAppFeaturesSection from "../components/MobileAppDevelopment/MobileAppFeatureSection";
import FAQSection from "../components/MobileAppDevelopment/FAQSection";

const MobileAppDevelopment = () => {
  return (
    <div>
      <ServicesHero />
      <MobileAppAboutSection />
      <MobileAppFeaturesSection />
      <ServicePageSection />
      <ClientReviewsSection />
      <FAQSection />
    </div>
  );
};

export default MobileAppDevelopment;

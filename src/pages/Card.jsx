import CardFAQ from "@/Card/Faq";
import NewFeaturesSection from "@/Card/FeaturesSection";
import HeroSection from "@/Card/HeroSction";
import ScrollFeaturesSection from "@/Card/ScrollFeaturesSection";
import CTASection from "@/Card/CTA";

export default function Card() {


  return (
    <div>
        <HeroSection />
        <NewFeaturesSection />
        <ScrollFeaturesSection />
        <CardFAQ />
        <CTASection />
    </div>
  );
}
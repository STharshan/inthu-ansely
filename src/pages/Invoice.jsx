import InvoiceFAQ from "@/Invoice/Faq";
import NewFeaturesSection from "@/Invoice/FeaturesSection";
import HeroSection from "@/Invoice/HeroSction";
import ScrollFeaturesSection from "@/Invoice/ScrollFeaturesSection";
import CTASection from "@/Invoice/CTA";

export default function Invoice() {


  return (
    <div>
        <HeroSection />
        <NewFeaturesSection />
        <ScrollFeaturesSection />
        <InvoiceFAQ />
        <CTASection />
    </div>
  );
}
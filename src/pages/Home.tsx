import React, { Suspense, lazy } from "react";
import CardsSection from "../features/home/CardSection";
import VideoSection from "../features/home/VideoSection";
import HeroSection from "../features/home/Header";
import Hero from "../features/home/Hero";
import TeamCarousel from "../features/home/TeamCard";
import PlatformProcess from "../features/home/PlatformProcess";
import { HomeTestimonialsSection } from "../components/organisms/HomeTestimonialsSection";
import { homeTestimonials } from "../constants/homeTestimonials";
import Newabout from "../features/home/Newabout";
import { ClientCarousel } from "../components/organisms/ClientCarousel";
import { clientLogos } from "../constants/clientCarousel";

// Lazy load heavy components
const Performance = lazy(() => import("../features/home/Animation"));

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <ClientCarousel clients={clientLogos} />
      <Newabout />
      <HeroSection />
      <CardsSection />
      <VideoSection />
      <TeamCarousel />
      <PlatformProcess />
      <HomeTestimonialsSection testimonials={homeTestimonials} />
      <Suspense fallback={<div style={{ minHeight: "400px" }} />}>
        <Performance />
      </Suspense>
    </div>
  );
};

export default Home;

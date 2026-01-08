import React, { Suspense, lazy } from "react";
import CardsSection from "../components/Home/CardSection";
import VideoSection from "../components/Home/VideoSection";
import HeroSection from "../components/Home/Header";
import Hero from "../components/Home/Hero";
import TeamCarousel from "../components/Home/TeamCard";
import PlatformProcess from "../components/Home/PlatformProcess";
import { HomeTestimonialsSection } from "../components/organisms/HomeTestimonialsSection";
import { homeTestimonials } from "../constants/homeTestimonials";
import Newabout from "../components/Home/Newabout";
import { ClientCarousel } from "../components/organisms/ClientCarousel";
import { clientLogos } from "../constants/clientCarousel";

// Lazy load heavy components
const Performance = lazy(() => import("../components/Home/Animation"));

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

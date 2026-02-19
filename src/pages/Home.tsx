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
import OurValues from "../components/About/OurValues";
import ScrollIndicator from "../components/molecules/ScrollIndicator";

// Lazy load heavy components
const Performance = lazy(() => import("../components/Home/Animation"));

const SECTION_IDS = [
  "home-hero",
  "home-clients",
  "home-values",
  "home-cards",
  "home-platform",
  "home-video",
  "home-team",
  "home-testimonials",
  "home-performance",
];

const Home: React.FC = () => {
  return (
    <div>
      <ScrollIndicator sections={SECTION_IDS} />

      <section id="home-hero">
        <Hero />
      </section>

      <section id="home-clients">
        <ClientCarousel clients={clientLogos} />
      </section>

      {/* <Newabout /> */}
      {/* <HeroSection /> */}

      <section id="home-values">
        <OurValues />
      </section>

      <section id="home-cards">
        <CardsSection />
      </section>

      <section id="home-platform">
        <PlatformProcess />
      </section>

      <section id="home-video">
        <VideoSection />
      </section>

      <section id="home-team">
        <TeamCarousel />
      </section>

      {/* <section id="home-testimonials">
        <HomeTestimonialsSection testimonials={homeTestimonials} />
      </section> */}

      <section id="home-performance">
        <Suspense fallback={<div style={{ minHeight: "400px" }} />}>
          <Performance />
        </Suspense>
      </section>
    </div>
  );
};

export default Home;

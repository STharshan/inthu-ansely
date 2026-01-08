import React from "react";
import CardsSection from "../components/Home/CardSection";
import VideoSection from "../components/Home/VideoSection";
import HeroSection from "../components/Home/Header";
import Hero from "../components/Home/Hero";
import TeamCarousel from "../components/Home/TeamCard";
import PlatformProcess from "../components/Home/PlatformProcess";
import { HomeTestimonialsSection } from "../components/organisms/HomeTestimonialsSection";
import { homeTestimonials } from "../constants/homeTestimonials";
import Newabout from "../components/Home/Newabout";
import ShowArea from "../components/Home/ShowArea";
import Performance from "../components/Home/Animation";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Newabout />
      <HeroSection />
      <ShowArea />
      <CardsSection />
      <VideoSection />
      <TeamCarousel />
      <PlatformProcess />
      <HomeTestimonialsSection testimonials={homeTestimonials} />
      <Performance />
    </div>
  );
};

export default Home;

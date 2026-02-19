import React from "react";
import AboutHero from "../components/About/AboutHero";
import Achievements from "../components/About/Achievements";
import OurStory from "../components/About/OurStory";
import OurValues from "../components/About/OurValues";
import { HomeTestimonialsSection } from "../components/organisms/HomeTestimonialsSection";
import { homeTestimonials } from "../constants/homeTestimonials";

const About: React.FC = () => {
  return (
    <div className="about-page min-h-screen bg-white dark:bg-black transition-colors duration-300">
      {/* Hero Section - Now with 2 images */}
      <AboutHero />

      {/* Achievements Section */}
      <Achievements />

      {/* Our Story Section */}
      <OurStory />

      {/* Our Values Section */}
      <OurValues />

      {/* <HomeTestimonialsSection testimonials={homeTestimonials} /> */}
    </div>
  );
};

export default About;

import React from 'react'
import CardsSection from '../components/Home/CardSection'
import VideoSection from '../components/Home/VedioSection'
import AboutSection from '../components/Home/AboutSection'
import CardCarousel from '../components/Home/CardCarousel'
import QuoteSection from '../components/Home/QuoteSection'
import SafetyInformation from '../components/Home/SafetyInformation'
import HeroSection from '../components/Home/Header'
import ServiceInquiry from "../components/Home/ServiceInquiry"
import Hero from "../components/Home/Hero"
import TeamCarousel from '../components/Home/TeamCard'
import PlatformProcess from '../components/Home/PlatformProcess'
import OurProcessSection from '../components/Home/OurProcess'
import ExpenseControlCenter from '../components/Home/Port/port'
import Newabout from "../components/Home/Newabout"
import ShowArea from "../components/Home/ShowArea"
const Home = () => {
  return (
    <div>
      {/* <ServiceInquiry /> */}
      <Hero />
      <Newabout />
      <HeroSection/>
      <AboutSection />
      <ShowArea />
      <CardsSection />
      <VideoSection />
      <CardCarousel />
      <QuoteSection />
      <TeamCarousel />
      <PlatformProcess />
      <OurProcessSection />
      <ExpenseControlCenter />
      {/* <SafetyInformation /> */}
    </div>
  )
}

export default Home

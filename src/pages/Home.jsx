import React from 'react'
import CardsSection from '../components/Home/CardSection'
import VideoSection from '../components/Home/VedioSection'
import AboutSection from '../components/Home/AboutSection'
import CardCarousel from '../components/Home/CardCarousel'
import QuoteSection from '../components/Home/QuoteSection'
import HeroSection from '../components/Home/Header'
import Hero from "../components/Home/Hero"
import TeamCarousel from '../components/Home/TeamCard'
import PlatformProcess from '../components/Home/PlatformProcess'
import OurProcessSection from '../components/Home/OurProcess'
import Newabout from "../components/Home/Newabout"
import ShowArea from "../components/Home/ShowArea"
import Performance from '../components/Home/Animation'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
      {/* <ServiceInquiry /> */}
      <Navbar />
      <Hero />
      <Newabout />
      <HeroSection/>
      {/* <AboutSection /> */}
      <ShowArea />
      <CardsSection />
      <VideoSection />
      <CardCarousel />
      {/* <QuoteSection /> */}
      <TeamCarousel />
      <PlatformProcess />
      <OurProcessSection />
      {/* <ExpenseControlCenter /> */}
      <Performance />
      {/* <SafetyInformation /> */}
    </div>
  )
}

export default Home

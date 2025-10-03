import React from 'react'
import CardsSection from '../components/Home/CardSection'
import VideoSection from '../components/Home/VedioSection'
import AboutSection from '../components/Home/AboutSection'
import CardCarousel from '../components/Home/CardCarousel'
import QuoteSection from '../components/Home/QuoteSection'
import SafetyInformation from '../components/Home/SafetyInformation'
import HeroSection from '../components/Home/Header'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <CardsSection />
      <VideoSection />
      <AboutSection />
      <CardCarousel />
      <QuoteSection />
      {/* <SafetyInformation /> */}
    </div>
  )
}

export default Home

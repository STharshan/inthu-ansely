import React from 'react'
import DigitalPartnershipHero from '../components/DigitalPartnership/DigitalPartnershipHero'
import DigitalPartnershipService from '../components/DigitalPartnership/DigitalPartnershipService'
import ServicePageSection from '../components/DigitalPartnership/ServicePageSection'
import ClientReviewsSection from '../components/DigitalPartnership/ClientReviewsSection'
import FAQSection from '../components/DigitalPartnership/FAQSection'
import LearningGuide from '../components/LearningGuide'

const DigitalPartnership = () => {
  return (
    <div>
        <DigitalPartnershipHero />
        <DigitalPartnershipService />
        <LearningGuide />
        <ServicePageSection />
        <ClientReviewsSection />
        <FAQSection />
    </div>
  )
}

export default DigitalPartnership
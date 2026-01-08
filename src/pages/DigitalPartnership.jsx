import React from 'react'
import DigitalPartnershipHero from '../components/DigitalPartnership/DigitalPartnershipHero'
import DigitalPartnershipService from '../components/DigitalPartnership/DigitalPartnershipService'
import ServicePageSection from '../components/DigitalPartnership/ServicePageSection'
import ClientReviewsSection from '../components/DigitalPartnership/ClientReviewsSection'
import FAQSection from '../components/DigitalPartnership/FAQSection'

const DigitalPartnership = () => {
  return (
    <div>
        <DigitalPartnershipHero />
        <DigitalPartnershipService />
        <ServicePageSection />
        <ClientReviewsSection />
        <FAQSection />
    </div>
  )
}

export default DigitalPartnership
import React from 'react'
import DigitalPartnershipHero from '../features/services/digital-partnership/DigitalPartnershipHero'
import DigitalPartnershipService from '../features/services/digital-partnership/DigitalPartnershipService'
import ServicePageSection from '../features/services/digital-partnership/ServicePageSection'
import ClientReviewsSection from '../features/services/digital-partnership/ClientReviewsSection'
import FAQSection from '../features/services/digital-partnership/FAQSection'

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
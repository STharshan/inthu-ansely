import React from 'react'
import DigitalMarketingHero from '../components/DigtalMarketing/DigtalMarketingHero'
import DigitalMarketingAbout from '../components/DigtalMarketing/DigitalMarketingAbout'
import DigitalMarketingProcess from '../components/DigtalMarketing/DigitalMarketingProcess'
import ServicePageSection from '../components/DigtalMarketing/ServicePageSection'
import ClientReviewsSection from '../components/DigtalMarketing/ClientReviewsSection'
import FAQSection from '../components/DigtalMarketing/FAQSection'

const DigitalMarketing = () => {
  return (
    <div>
      <DigitalMarketingHero />
      <DigitalMarketingAbout />
      <DigitalMarketingProcess />
      <ServicePageSection />
      <ClientReviewsSection />
      <FAQSection />
    </div>
  )
}

export default DigitalMarketing

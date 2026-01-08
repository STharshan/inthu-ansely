import React from 'react'
import DigitalMarketingHero from '../components/DigtalMarketing/DigtalMarketingHero'
import DigitalMarketingAbout from '../components/DigtalMarketing/DigitalMarketingAbout'
import DigitalMarketingProcess from '../components/DigtalMarketing/DigitalMarketingProcess'
import ServicePageSection from '../components/DigtalMarketing/ServicePageSection'
import ClientReviewsSection from '../components/DigtalMarketing/ClientReviewsSection'
import FAQSection from '../components/DigtalMarketing/FAQSection'
import { LearningGuide } from '../components/organisms/LearningGuide'

const DigitalMarketing = () => {
  return (
    <div>
      <DigitalMarketingHero />
      <DigitalMarketingAbout />
      <DigitalMarketingProcess />
      <LearningGuide service="digital-marketing" />
      <ServicePageSection />
      <ClientReviewsSection />
      <FAQSection />
    </div>
  )
}

export default DigitalMarketing

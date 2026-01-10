import React from 'react'
import DigitalMarketingHero from '../features/services/digital-marketing/DigitalMarketingHero'
import DigitalMarketingAbout from '../features/services/digital-marketing/DigitalMarketingAbout'
import DigitalMarketingProcess from '../features/services/digital-marketing/DigitalMarketingProcess'
import ServicePageSection from '../features/services/digital-marketing/ServicePageSection'
import ClientReviewsSection from '../features/services/digital-marketing/ClientReviewsSection'
import FAQSection from '../features/services/digital-marketing/FAQSection'
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

import ServicesSection from '@/components/Home/CardSection'
import ClientReviewsSection from '../components/DigitalPartnership/ClientReviewsSection'
import DigitalPartnershipHero from '../components/DigitalPartnership/DigitalPartnershipHero'
import DigitalPartnershipService from '../components/DigitalPartnership/DigitalPartnershipService'
import FAQSection from '../components/DigitalPartnership/FAQSection'

const DigitalPartnership = () => {
  return (
    <div>
        <DigitalPartnershipHero />
        <DigitalPartnershipService />
        <ServicesSection />
        <ClientReviewsSection />
        <FAQSection />
    </div>
  )
}

export default DigitalPartnership
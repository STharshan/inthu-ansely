import React from 'react'
import CustomIntroduction from '../components/CustomWebsite/CutomIntroduction'
import ProjectChallenges from '../components/CustomWebsite/ProjectChallenges'
import ProjectSolution from '../components/CustomWebsite/ProjectSolution'
import ProjectDetails from '../components/CustomWebsite/CustomWebsiteHero'
import ViewMoreSection from '../components/CustomWebsite/ViewMoreSection'
import ServicePageSection from '../components/CustomWebsite/ServicePageSection'
import ClientReviewsSection from '../components/CustomWebsite/ClientReviewsSection'
import FAQSection from '../components/CustomWebsite/FAQSection'
import LearningGuide from '../components/LearningGuide'

const CustomWebsite = () => {
  return (
    <div>
      <ProjectDetails />
      <CustomIntroduction />
      <ProjectChallenges />
      <ProjectSolution />
      <ViewMoreSection />
      <LearningGuide />
      <ServicePageSection />
      <ClientReviewsSection />
      <FAQSection />
    </div>
  )
}

export default CustomWebsite

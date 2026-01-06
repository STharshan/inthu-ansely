import React from 'react'
import CustomIntroduction from '../components/CustomWebsite/CutomIntroduction'
import ProjectChallenges from '../components/CustomWebsite/ProjectChallenges'
import ProjectSolution from '../components/CustomWebsite/ProjectSolution'
import ProjectDetails from '../components/CustomWebsite/CustomWebsiteHero'
import ViewMoreSection from '../components/CustomWebsite/ViewMoreSection'

const CustomWebsite = () => {
  return (
    <div>
      <ProjectDetails />
      <CustomIntroduction />
      <ProjectChallenges />
      <ProjectSolution />
      <ViewMoreSection />
    </div>
  )
}

export default CustomWebsite

import React from 'react'
import CustomIntroduction from '../components/CustomWebsite/CutomIntroduction'
import ProjectChallenges from '../components/CustomWebsite/ProjectChallenges'
import ProjectSolution from '../components/CustomWebsite/ProjectSolution'
import ProjectDetails from '../components/CustomWebsite/CustomWebsiteHero'

const CustomWebsite = () => {
  return (
    <div>
      <ProjectDetails />
      <CustomIntroduction />
      <ProjectChallenges />
      <ProjectSolution />
    </div>
  )
}

export default CustomWebsite

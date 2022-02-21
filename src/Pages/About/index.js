import React from 'react'
import AboutHero from "../../Components/AboutHero/index"
import Education from '../../Components/Education'
import Me from '../../Components/Me'
import WorkExperience from '../../Components/WorkExperience'

export default function About() {
  return (
    <div>
      <AboutHero/>
      <Education/>
      <WorkExperience/>
      <Me/>
    </div>
  )
}

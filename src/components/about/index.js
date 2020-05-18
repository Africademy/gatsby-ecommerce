import React from "react"
import { AboutWrapper } from "./about.styled"
import AboutSVG from "../aboutVisual"
import AboutContent from "../aboutContent"

const About = () => {
  return (
    <AboutWrapper>
      <AboutContent />
      <AboutSVG />
    </AboutWrapper>
  )
}

export default About

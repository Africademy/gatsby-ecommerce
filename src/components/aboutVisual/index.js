import React from "react"
import { Illu, AboutVisual } from "../about/about.styled"
import { Controller, Scene } from "react-scrollmagic"
import { Tween } from "react-gsap"
import illu from "../../static/undraw_web_shopping_dd4l.svg"

const AboutSVG = () => {
  return (
    <Controller>
      <Scene triggerHook="onCenter" duration={800} triggerElement="#cta">
        <Tween
          to={{
            y: "10vw",
          }}
        >
          <AboutVisual>
            <Illu src={illu} />
          </AboutVisual>
        </Tween>
      </Scene>
    </Controller>
  )
}

export default AboutSVG

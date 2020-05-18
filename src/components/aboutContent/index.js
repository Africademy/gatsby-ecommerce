import React from "react"
import { Content, Description, Title, CTA } from "../about/about.styled"
import { Controller, Scene } from "react-scrollmagic"
import { Tween } from "react-gsap"

const AboutContent = () => {
  return (
    <Controller>
      <Scene triggerHook="onCenter" duration={800} triggerElement="#cta">
        <Tween
          from={{
            y: "20vh",
          }}
        >
          <Content>
            <Title>How our store works?</Title>
            <Description>
              Our main purpose is to sell customers best quality and original
              streetwear items. Each of products in our store have 30 days
              guarantee
            </Description>
            <CTA>Check our terms</CTA>
          </Content>
        </Tween>
      </Scene>
    </Controller>
  )
}

export default AboutContent

import React, { useEffect } from "react"
import { ImageContainer, Img } from "./heroImage.styled"
import { Controller, Scene } from "react-scrollmagic"
import { Tween } from "react-gsap"
import gsap, { CSSPlugin } from "gsap"
gsap.registerPlugin(CSSPlugin)

const HeroImage = ({ img, bg, duration }) => {
  useEffect(() => {
    const tl = gsap.timeline({ duration: 0.7 })
    tl.from(".hero__image", {
      width: 0,
      opacity: 0,
      stagger: 0.3,
    })
  }, [])
  return (
    <Controller>
      <Scene
        duration={duration}
        indicators={false}
        triggerElement="#cta"
        triggerHook="onCenter"
      >
        <Tween
          to={{
            y: "-40vh",
          }}
        >
          <ImageContainer className="hero__image" bg={bg}>
            <Img src={img} />
          </ImageContainer>
        </Tween>
      </Scene>
    </Controller>
  )
}

export default HeroImage

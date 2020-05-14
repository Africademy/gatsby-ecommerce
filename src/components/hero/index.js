import React, { useEffect } from "react"
import {
  HeroWrapper,
  HeroContent,
  Title,
  CTABtn,
  HeroImages,
  ImageContainer,
  Img,
  HeroBackground,
  Shape,
} from "./hero.styled"
import shoes from "../../static/shoes.png"
import hoodie from "../../static/hoodie.jpg"
import shoulder from "../../static/shoulder.jpg"
import shape from "../../static/hero-shape.svg"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import gsap, { CSSPlugin } from "gsap"
import { Controller, Scene } from "react-scrollmagic"
import { Tween } from "react-gsap"
gsap.registerPlugin(CSSPlugin)

const Hero = () => {
  useEffect(() => {
    const tl = gsap.timeline({ duration: 1.5 })
    tl.from("#title", {
      translateY: "5vw",
      opacity: 0,
    })
    tl.from("#cta", {
      translateX: "-5vw",
      opacity: 0,
    })
  }, [])
  return (
    <HeroWrapper>
      <HeroContent>
        <Title id="title">Biggest streetwear store in your country</Title>
        <AniLink id="cta" to="/products">
          <CTABtn>
            Explore
            <svg
              height={30}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none">
                <path
                  d="M6 12h12.5m0 0l-6-6m6 6l-6 6"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                />
              </g>
            </svg>
          </CTABtn>
        </AniLink>
      </HeroContent>
      <HeroImages>
        <Controller>
          <Scene
            duration={300}
            indicators={true}
            triggerElement="#cta"
            triggerHook="onCenter"
          >
            <Tween></Tween>
          </Scene>
        </Controller>
        <Controller>
          <Scene
            duration={600}
            indicators={true}
            triggerElement="#cta"
            triggerHook="onCenter"
          >
            <Tween>
              <ImageContainer>
                <Img src={shoes} />
              </ImageContainer>
            </Tween>
          </Scene>
        </Controller>
        <Controller>
          <Scene
            duration={600}
            indicators={true}
            triggerElement="#cta"
            triggerHook="onCenter"
          >
            <Tween>
              <Img src={shoulder} />
            </Tween>
          </Scene>
        </Controller>
      </HeroImages>
      <HeroBackground>
        <Shape src={shape} alt="abstract-shape" />
      </HeroBackground>
    </HeroWrapper>
  )
}

export default Hero

/*
<Shape src={shape} alt="abstract-shape" />
 */

import React from "react"
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
import { Link } from "gatsby"

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroContent>
        <Title>Biggest streetwear store in your country</Title>
        <Link to="/products">
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
        </Link>
      </HeroContent>
      <HeroImages>
        <ImageContainer>
          <Img src={hoodie} />
        </ImageContainer>
        <ImageContainer>
          <Img src={shoes} />
        </ImageContainer>
        <ImageContainer>
          <Img src={shoulder} />
        </ImageContainer>
      </HeroImages>
      <HeroBackground>
        <Shape src={shape} alt="abstract-shape" />
      </HeroBackground>
    </HeroWrapper>
  )
}

export default Hero

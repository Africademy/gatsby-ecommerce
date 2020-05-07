import React from "react"
import {
  HeroWrapper,
  HeroContent,
  Title,
  CTABtn,
  HeroImages,
  ImageContainer,
  Img,
} from "./hero.styled"
import shoes from "../../static/shoes.png"
import hoodie from "../../static/hoodie.jpg"
import shoulder from "../../static/shoulder.jpg"

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroContent>
        <Title>Biggest streetwear store in your country</Title>
        <CTABtn>Explore</CTABtn>
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
    </HeroWrapper>
  )
}

export default Hero

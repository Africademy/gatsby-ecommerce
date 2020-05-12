import React from "react"
import { LeftSideWrapper, ImageContainer, Img } from "./leftSide.styled"

const LeftSide = ({ leftImg, centerImg, rightImg }) => {
  return (
    <LeftSideWrapper>
      <ImageContainer>
        <Img src={leftImg} />
      </ImageContainer>
      <ImageContainer>
        <Img src={centerImg} />
      </ImageContainer>
      <ImageContainer>
        <Img src={rightImg} />
      </ImageContainer>
    </LeftSideWrapper>
  )
}

export default LeftSide

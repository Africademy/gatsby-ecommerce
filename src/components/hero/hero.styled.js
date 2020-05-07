import styled from "styled-components"
import { colors } from "../../theme"

export const HeroWrapper = styled.main`
  width: 100vw;
  height: 90vh;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  padding: 0 5vw 0;
  position: relative;
`
export const HeroContent = styled.section`
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  height: 90%;
  padding: 10vw 0 10vw;
`
export const Title = styled.h1`
  font-size: 4em;
`
export const CTABtn = styled.button`
  width: max-content;
  padding: 20px 40px 20px;
  border: none;
  font-size: 1.2em;
  background-color: ${colors.cta};
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  -webkit-align-items: center;

  svg {
    margin: 0 0 0 20px;
  }

  :focus {
    outline: none;
  }
`
export const HeroImages = styled.section`
  width: 50%;
  height: 90%;
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;

  div:nth-child(1) img {
    transform: rotate(0deg);
    object-position: 0 0;
    height: 100%;
    :hover {
      transform: scale(1.1);
      transition: 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    }
  }
  div:nth-child(2) {
    height: 90%;
  }
  div:nth-child(3) img {
    transform: rotate(0deg);
    object-position: 0 0;
    height: 100%;
    :hover {
      transform: scale(1.1);
      transition: 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    }
  }
`
export const Img = styled.img`
  object-fit: cover;
  object-position: 100% -5vw;
  height: 80%;
  width: auto;
  transform: rotate(-30deg);
  transition: 0.6s cubic-bezier(0.22, 1, 0.36, 1);
`
export const ImageContainer = styled.div`
  width: 30%;
  height: 100%;
  background-color: #ffc105;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover ${Img} {
    transform: rotate(-30deg) scale(1.1);
    transition: 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  }
`
export const HeroBackground = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  height: 100%;
  width: 50%;
`
export const Shape = styled.img`
  position: absolute;
  bottom: -50%;
  left: -20%;
  opacity: 0.2;
  transform: scale(3) rotate(30deg);
`

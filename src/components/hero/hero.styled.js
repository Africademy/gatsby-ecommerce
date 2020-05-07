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
  }
  div:nth-child(2) {
    height: 90%;
  }
  div:nth-child(3) img {
    transform: rotate(0deg);
    object-position: 0 0;
    height: 100%;
  }
`
export const ImageContainer = styled.div`
  width: 30%;
  height: 100%;
  background-color: #ffc105;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Img = styled.img`
  object-fit: cover;
  object-position: 100% -5vw;
  height: 80%;
  width: auto;
  transform: rotate(-30deg);
`

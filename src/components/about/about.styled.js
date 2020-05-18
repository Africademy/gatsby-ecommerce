import styled from "styled-components"
import { colors } from "../../theme"
import { small, medium, large } from "../../breakpoints"

export const AboutWrapper = styled.main`
  width: 100vw;
  height: 100vh;
  padding: 0 10vw 0;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;

  @media all and (max-width: ${large}) {
    height: 100vh;
    padding: 0 5vw 0;
  }
`
//MAIN CONTENT
export const Content = styled.section`
  width: 100%;
  height: 45vh;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  justify-content: space-between;
  -webkit-justify-content: space-between;

  @media all and (max-width: ${small}) {
    height: 40vh;
  }
  @media all and (min-width: ${small}) and (max-width: ${medium}) {
    height: 50vh;
  }
`
export const Title = styled.h2`
  font-size: 4em;
  width: 80%;

  @media all and (max-width: ${small}) {
    font-size: 3em;
    width: 100%;
  }
  @media all and (min-width: ${medium}) {
    font-size: 3em;
  }
`
export const Description = styled.p`
  font-size: 1.1em;
  margin: 3vw 0 0;
  width: 80%;
  @media all and (max-width: ${small}) {
    width: 100%;
  }
`
export const CTA = styled.button`
  border: none;
  background-color: ${colors.cta};
  padding: 20px 40px 20px;
  border-radius: 5px;
  width: max-content;
  font-size: 1em;
  cursor: pointer;
  font-weight: 500;
  transition: 0.3s ease-in-out;

  :focus {
    outline: none;
  }
  :hover {
    transition: 0.3s ease-in-out;
    transform: scale(1.02);
    //color: rgb(219, 139, 0);
    box-shadow: 0 1.3px 2.2px -9px rgba(219, 139, 0, 0.037),
      0 3.1px 5.3px -9px rgba(219, 139, 0, 0.053),
      0 5.8px 10px -9px rgba(219, 139, 0, 0.065),
      0 10.3px 17.9px -9px rgba(219, 139, 0, 0.077),
      0 19.2px 33.4px -9px rgba(219, 139, 0, 0.093),
      0 46px 80px -9px rgba(219, 139, 0, 0.13);
  }
  @media all and (max-width: ${small}) {
    font-size: 1.2em;
    width: 100%;
    height: 70px;
  }
  @media all and (min-width: ${small}) and (max-width: ${medium}) {
    display: flex;
    align-self: flex-end;
    height: 70px;
  }
`
//VISUAL LANGUAGE
export const AboutVisual = styled.section`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;

  @media all and (max-width: ${medium}) {
    display: none;
  }
`
export const Illu = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center center;
  transition: 0.3s ease-in-out;

  :hover {
    transform: scale(1.06);
    transition: 0.3s ease-in-out;
  }
`

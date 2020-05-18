import styled from "styled-components"
import { small, medium, large, xlarge } from "../../../breakpoints"

export const LeftSideWrapper = styled.section`
  width: 50%;
  height: 90%;
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  padding: 5vw;
  margin: 10vh 0 0;
  align-items: center;
  justify-self: flex-end;

  div:nth-child(1) {
    height: 50%;
    align-self: flex-start;
  }
  div:nth-child(3) {
    height: 100%;
    align-self: flex-end;
  }
  @media all and (max-width: ${small}) {
    display: none;
  }
  @media all and (min-width: ${small}) and (max-width: ${medium}) {
    display: none;
  }
  @media all and (min-width: ${medium}) and (max-width: ${large}) {
    width: 20%;
    padding: 0;
    div:nth-child(1) {
      display: none;
    }
    div:nth-child(2) {
      display: none;
    }
  }
  @media all and (min-width: ${large}) and (max-width: ${xlarge}) {
    width: 45%;
  }
`
export const ImageContainer = styled.div`
  width: 30%;
  height: 70%;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
  overflow: hidden;
  transition: 0.3s ease-in-out;
  :hover {
    height: 80%;
    transition: 0.3s ease-in-out;
  }
  @media all and (max-width: ${small}) {
    position: absolute;
    height: 50%;
  }
  @media all and (min-width: ${small}) and (max-width: ${medium}) {
    position: absolute;
    height: 50%;
  }
  @media all and (min-width: ${medium}) and (max-width: ${large}) {
    height: 100%;
    width: 100%;
  }
`
export const Img = styled.img`
  height: 100%;
  object-fit: cover;
  transition: 0.3s ease-in-out;
`

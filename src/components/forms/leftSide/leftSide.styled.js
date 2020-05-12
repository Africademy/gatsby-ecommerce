import styled from "styled-components"
import { medium, small } from "../../../breakpoints"

export const LeftSideWrapper = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  padding: 5vw;
  align-items: center;

  div:nth-child(1) {
    height: 50%;
    align-self: flex-start;
  }
  div:nth-child(3) {
    height: 50%;
    align-self: flex-end;
  }
  @media all and (max-width: ${small}) {
    width: 100%;
    height: 30%;
    overflow: hidden;

    div:nth-child(1) {
      top: -20%;
      left: 0;
    }
    div:nth-child(2) {
      left: 35%;
      top: -30%;
    }
    div:nth-child(3) {
      right: 0;
      top: -35%;
    }
  }
  @media all and (min-width: ${small}) and (max-width: ${medium}) {
    height: 15%;
    width: 100%;

    div:nth-child(1) {
      top: -30%;
      left: 0;
    }
    div:nth-child(2) {
      left: 35%;
      top: -35%;
    }
    div:nth-child(3) {
      right: 0;
      top: -40%;
    }
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
`
export const Img = styled.img`
  height: 100%;
  object-fit: cover;
  transition: 0.3s ease-in-out;
`

import styled, { keyframes } from "styled-components"
import { small, medium, large, xlarge } from "../../breakpoints"

const spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const LoadingWrapper = styled.div`
  height: 2vw;
  width: 2vw;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;

  @media all and (max-width: ${medium}) {
    height: 5vw;
    width: 5vw;
  }
  @media all and (min-width: ${medium}) and (max-width: ${large}) {
    height: 4vw;
    width: 4vw;
  }
  @media all and (min-width: ${large}) and (max-width: ${xlarge}) {
    height: 3vw;
    width: 3vw;
  }
`
export const Spinner = styled.div`
  height: 60%;
  width: 60%;
  background-color: ${props => props.color};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;

  @media all and (max-width: ${small}) {
    height: 80%;
    width: 80%;
  }
  @media all and (min-width: ${small}) and (max-width: ${medium}) {
    height: 50%;
    width: 50%;
  }
`
export const InsideCircle = styled.div`
  height: 85%;
  width: 85%;
  border-radius: 50%;
  background-color: ${props => props.color};
  position: relative;

  :after {
    content: "";
    display: block;
    height: 60%;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60%;
    background-color: ${props => props.color};
    transform-origin: 0 0;
    animation: 0.8s ${spinner} linear infinite;
  }
  @media all and (max-width: ${small}) {
    height: 80%;
    width: 80%;
    :after {
      height: 80%;
      width: 80%;
    }
  }
  @media all and (min-width: ${small}) and (max-width: ${medium}) {
    height: 75%;
    width: 75%;
    :after {
      height: 80%;
      width: 80%;
    }
  }
  @media all and (min-width: ${medium}) and (max-width: ${large}) {
    height: 80%;
    width: 80%;
    :after {
      width: 75%;
      height: 75%;
    }
  }
`

import styled from "styled-components"
import { colors } from "../../theme"
import { small, medium, large, xlarge } from "../../breakpoints"

export const NotFoundWrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
  padding: 0 0 5vw;

  @media all and (max-width: ${small}) {
    padding: 0 0 15vh;
  }
  @media all and (min-width: ${small}) and (max-width: ${large}) {
    padding: 0 0 10vh;
  }
  @media all and (min-width: ${large}) and (max-width: ${xlarge}) {
    padding: 0 0 10vh;
  }
`
export const NotFound = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-flow: column;
  -webkit-flex-flow: column;
  align-items: center;
  -webkit-align-items: center;

  a {
    margin: 2vw 0 0;
    padding: 20px 40px 20px;
    background-color: ${colors.cta};
    border-radius: 5px;
    font-size: 1em;
    font-weight: 600;
    transition: 0.3s ease-in-out;
    :hover {
      transform: translateY(-5px);
      transition: 0.3s ease-in-out;
    }
  }
`
export const Round = styled.div`
  width: 100%;
  height: 60%;
  background-color: ${colors.cta};
  clip-path: circle(100vw at 50% -73vw);
  display: flex;
  justify-content: center;
  align-items: flex-end;

  @media all and (max-width: ${small}) {
    clip-path: circle(100vh at 50% -55vh);
  }
  @media all and (min-width: ${small}) and (max-width: ${medium}) {
    clip-path: circle(100vh at 50% -52vh);
  }
  @media all and (min-width: ${medium}) and (max-width: ${xlarge}) {
    clip-path: circle(100vh at 50% -50vh);
  }
`
export const FourOhFour = styled.h3`
  font-size: 18em;
  font-weight: 800;
  margin: 0 0 -3vw;
  @media all and (max-width: ${small}) {
    font-size: 12em;
    margin: 0;
  }
`
export const Message = styled.p`
  font-size: 1.5em;
`

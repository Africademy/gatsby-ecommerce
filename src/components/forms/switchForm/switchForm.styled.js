import styled from "styled-components"
import { colors } from "../../../theme"
import { small, medium } from "../../../breakpoints"

export const SwitchFormWrapper = styled.div`
  width: 70%;
  height: 10vh;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  align-items: center;
  -webkit-align-items: center;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  padding: 2vh 0 2vh;

  a {
    color: ${colors.cta};
    font-weight: 600;
  }
  @media all and (max-width: ${small}) {
    width: 100%;
    height: 12vh;
    margin: 5vh 0 0;
  }
  @media all and (min-width: ${small}) and (max-width: ${medium}) {
    width: 100%;
    height: 10vh;
    margin: 2vh 0 0;
  }
`
export const Title = styled.p`
  font-size: 1em;
`

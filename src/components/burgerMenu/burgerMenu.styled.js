import styled from "styled-components"
import { small } from "../../breakpoints"

export const BurgerWrapper = styled.main`
  display: none;

  @media all and (max-width: ${small}) {
    display: flex;
    width: 80vw;
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
  }
`

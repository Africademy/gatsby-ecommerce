import styled from "styled-components"
import { small } from "../../../breakpoints"

export const MyAccount = styled.h3`
  font-size: 1.1em;
  font-weight: 500;
  display: flex;
  align-items: center;
  -webkit-align-items: center;

  svg {
    margin: 0 0 0 1vw;
    transition: 0.3s ease-in-out;
    transform: rotate(${props => (props.dropdown ? "180deg" : 0)});
  }
  @media all and (max-width: ${small}) {
    font-size: 1.2em;
  }
`

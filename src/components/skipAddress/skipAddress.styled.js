import styled from "styled-components"
import { colors } from "../../theme"
import { medium } from "../../breakpoints"

export const SkipWrapper = styled.section`
  width: 70%;
  height: 10vh;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  align-items: center;
  -webkit-align-items: center;
  justify-content: space-evenly;

  @media all and (max-width: ${medium}) {
    width: 100%;
  }
`
export const Header = styled.p`
  width: 100%;
  text-align: center;
`
export const SubmitBtn = styled.button`
  font-size: 1em;
  border: none;
  background: none;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  :focus {
    outline: none;
  }
  :hover {
    transition: 0.3s ease-in-out;
    color: ${colors.cta};
  }
`

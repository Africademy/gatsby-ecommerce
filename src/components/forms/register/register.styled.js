import styled from "styled-components"
import { colors } from "../../../theme"

export const RegisterFormWrapper = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
`
export const Title = styled.h3`
  font-size: 1.5em;
`
export const Btns = styled.section`
  width: 70%;
  height: auto;
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;
`
export const NextFields = styled.button`
  border: none;
  width: max-content;
  padding: 20px 40px 20px;
  font-size: 1em;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  cursor: pointer;
  background-color: ${colors.cta};

  :focus {
    outline: none;
  }
`

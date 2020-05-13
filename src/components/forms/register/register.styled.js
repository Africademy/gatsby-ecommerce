import styled from "styled-components"
import { colors } from "../../../theme"
import { medium } from "../../../breakpoints"

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
export const NotValid = styled.button`
  border: none;
  width: max-content;
  padding: 20px 40px 20px;
  font-size: 1em;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  cursor: not-allowed;
  background-color: #b7b7b7;

  :focus {
    outline: none;
  }
`
export const CodeAndCity = styled.section`
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;
  height: auto;
  width: 70%;
`
export const PostalCodeContainer = styled.div`
  width: 30%;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  margin: 0 0 2vw;

  @media all and (max-width: ${medium}) {
    width: 100%;
    margin: 0 0 5vw;
  }
`
export const PostalCode = styled.div`
  width: 100%;
  height: 50px;
  background-color: #eeeeee;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  font-weight: 600;

  input:nth-child(2) {
    width: 60%;
  }
`
export const CityContainer = styled.div`
  width: 50%;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  margin: 0 0 2vw;

  @media all and (max-width: ${medium}) {
    width: 100%;
    margin: 0 0 5vw;
  }
`
export const Number = styled.input`
  height: 100%;
  width: 40%;
  font-size: 1em;
  padding: 10px;
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  border: none;
  background: transparent;

  :focus {
    outline: none;
  }
`
export const StepBack = styled.button`
  font-size: 1em;
  border: none;
  background: none;
  cursor: pointer;
`

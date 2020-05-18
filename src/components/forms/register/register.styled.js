import styled from "styled-components"
import { colors } from "../../../theme"
import { small, medium, large, xlarge } from "../../../breakpoints"

export const RegisterFormWrapper = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;

  @media all and (max-width: ${small}) {
    width: 100%;
    margin: 10vw 0 0;
  }
  @media all and (min-width: ${small}) and (max-width: ${xlarge}) {
    width: 100%;
  }
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
  a {
    display: flex;
    align-items: center;
    -webkit-align-items: center;
  }

  @media all and (max-width: ${small}) {
    flex-flow: column-reverse;
    -webkit-flex-flow: column-reverse;
    width: 100%;
    height: auto;
    margin: 5vw 0 0;

    a {
      height: 70px;
      width: 100%;
      display: flex;
      justify-content: center;
      -webkit-justify-content: center;
      align-items: center;
      -webkit-align-items: center;
    }
  }
  @media all and (min-width: ${small}) and (max-width: ${medium}) {
    width: 100%;
    margin: 5vw 0 0;
  }
`
export const NextFields = styled.button`
  border: none;
  width: max-content;
  padding: 15px 30px 15px;
  font-size: 1em;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  cursor: pointer;
  background-color: ${colors.cta};

  :focus {
    outline: none;
  }
  @media all and (max-width: ${small}) {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    -webkit-justify-content: center;
    align-items: center;
    -webkit-align-items: center;
  }
  @media all and (min-width: ${small}) and (max-width: ${medium}) {
    font-size: 1.1em;
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
  @media all and (max-width: ${small}) {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    -webkit-justify-content: center;
    align-items: center;
    -webkit-align-items: center;
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
  @media all and (max-width: ${small}) {
    width: 100%;
  }
  @media all and (min-width: ${small}) and (max-width: ${medium}) {
    width: 100%;
  }
`
export const PostalCodeContainer = styled.div`
  width: 30%;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  margin: 0 0 2vw;

  @media all and (max-width: ${small}) {
    width: 40%;
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
  @media all and (max-width: ${small}) {
    height: 60px;
    width: 80%;
  }
  @media all and (min-width: ${small}) and (max-width: ${medium}) {
    height: 60px;
    width: 70%;
  }
`
export const CityContainer = styled.div`
  width: 50%;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  margin: 0 0 2vw;

  @media all and (max-width: ${small}) {
    width: 60%;
    margin: 0 0 5vw;
  }
  @media all and (min-width: ${small}) and (max-width: ${medium}) {
    width: 70%;
  }
`
export const Number = styled.input`
  height: 100%;
  width: 100%;
  font-size: 1em;
  padding: 10px;
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  border: none;
  background: transparent;

  :focus {
    outline: none;
  }
  @media all and (max-width: ${small}) {
    font-size: 1.1em;
  }
`
export const StepBack = styled.button`
  font-size: 1em;
  border: none;
  background: none;
  cursor: pointer;

  @media all and (max-width: ${small}) {
    height: 70px;
    width: 100%;
  }
  @media all and (min-width: ${small}) and (max-width: ${medium}) {
    font-size: 1.1em;
  }
`
export const Error = styled.p`
  display: ${props => (props.notValid === "" ? "none" : "block")};
  padding: 10px 20px 10px;
  border-radius: 5px;
  background-color: #ff0043;
  width: max-content;
  color: #fff;
  margin: 0 0 1vw;
`

import styled, { createGlobalStyle } from "styled-components"
import { small, medium, large, xlarge } from "../../../breakpoints"
import { colors } from "../../../theme"

export const HeaderlessLayout = createGlobalStyle`
  *, :before, :after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
  }
  a {
    color: #000;
    text-decoration: none;
  }
`
export const FormWrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  margin: 0;
  padding: 0;

  @media all and (max-width: ${medium}) {
    flex-flow: column;
    -webkit-flex-flow: column;
    overflow: hidden;
  }
`

export const RightSide = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;

  @media all and (max-width: ${small}) {
    width: 100%;
    height: 70%;
  }
  @media all and (min-width: ${small}) and (max-width: ${medium}) {
    width: 100%;
    height: 80%;
  }
  @media all and (min-width: ${medium}) and (max-width: ${large}) {
    width: 100%;
  }
  @media all and (min-width: ${large}) and (max-width: ${xlarge}) {
    width: 55%;
  }
`
export const Form = styled.form`
  width: 70%;
  height: 70%;

  @media all and (max-width: ${small}) {
    width: 100%;
    padding: 5vw;
    height: 100%;
  }
  @media all and (min-width: ${small}) and (max-width: ${medium}) {
    width: 70%;
  }
  @media all and (min-width: ${medium}) and (max-width: ${xlarge}) {
    width: 100%;
    margin: 0 0 0 5vw;
  }
`
export const Title = styled.h3`
  font-size: 2.5em;
  margin: 0 0 3vw;
`
export const Name = styled.section`
  width: 70%;
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;

  div:nth-child(1) {
    width: 45%;
  }
  div:nth-child(2) {
    width: 45%;
  }
  @media all and (max-width: ${medium}) {
    width: 100%;
  }
`
export const InputContainer = styled.div`
  width: 70%;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  margin: 0 0 2vw;

  @media all and (max-width: ${medium}) {
    width: 100%;
    margin: 0 0 5vw;
  }
`
export const Label = styled.label`
  margin: 0 0 0.5vw;
  @media all and (max-width: ${medium}) {
    font-size: 1.1em;
  }
`
export const Input = styled.input`
  height: 50px;
  font-size: 1em;
  padding: 10px;
  border: none;
  background-color: #eeeeee;

  :focus {
    outline: none;
  }

  @media all and (max-width: ${medium}) {
    height: 60px;
    font-size: 1.2em;
  }
`
export const TogglePassword = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  position: relative;
  label {
    margin: 0;
  }
`
export const CustomCheckbox = styled.span`
  height: 25px;
  width: 25px;
  background: transparent;
  border: 2px solid #000;
  border-radius: 8px;
  position: absolute;
  top: 50%;
  margin: -12.5px 0 0 0;
  left: 5px;
  z-index: -1;
  transition: 0.3s ease-in-out;

  :before {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: ${colors.cta};
  }
`
export const ToggleVisibility = styled.input`
  margin: 0 15px 0 5px;
  opacity: 0;
  width: 25px;
  height: 25px;
  position: relative;
  cursor: pointer;

  :checked ~ span {
    background-color: ${colors.cta};
    border: 1px solid ${colors.cta};
  }

  @media all and (max-width: ${medium}) {
    height: 30px;
    width: 30px;
    margin: 0 10px 0 0;
  }
`
export const Btns = styled.section`
  width: 70%;
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;

  a {
    display: ${props => (props.validate ? "none" : "block")};
  }

  @media all and (max-width: ${medium}) {
    width: 100%;
    flex-flow: column-reverse;
    -webkit-flex-flow: column-reverse;
    height: auto;
  }
`
export const SubmitBtn = styled.button`
  width: ${props => (props.validate ? "100%" : "50%")};
  padding: 20px 40px 20px;
  font-size: 1em;
  border: none;
  background-color: ${props => (props.validate ? "#13c123" : "#000")};
  color: #fff;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;

  :focus {
    outline: none;
  }
  @media all and (max-width: ${medium}) {
    width: 100%;
    height: 70px;
    font-size: 1.2em;
  }
`
export const Error = styled.p`
  padding: 15px 30px 15px;
  background-color: #ff0043;
  color: #fff;
  border-radius: 10px;
  width: 70%;
  margin: 0 0 1vw;
  opacity: ${props => (props.error === "" ? 0 : 1)};
  transition: 0.3s ease-in-out;

  @media all and (max-width: ${medium}) {
    width: 100%;
  }
`
export const ReturnBtn = styled.button`
  border: none;
  background: none;
  font-size: 1em;
  cursor: pointer;
  display: ${props => (props.validate ? "none" : "block")};

  :focus {
    outline: none;
  }

  @media all and (max-width: ${medium}) {
    margin: 8vw 0 0;
  }
`

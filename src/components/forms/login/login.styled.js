import styled, { createGlobalStyle } from "styled-components"

export const HeaderlessLayout = createGlobalStyle`
  *, :before, :after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a {
    color: #000;
    text-decoration: none;
  }
`
export const LoginWrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`
export const LeftSide = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  padding: 5vw;
  align-items: center;

  div:nth-child(1) {
    height: 50%;
    align-self: flex-start;
  }
  div:nth-child(3) {
    height: 50%;
    align-self: flex-end;
  }
`
export const ImageContainer = styled.div`
  width: 30%;
  height: 70%;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
  overflow: hidden;
  :hover {
    height: 80%;
  }
`
export const Img = styled.img`
  height: 100%;
  object-fit: cover;
`

export const RightSide = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
`
export const Form = styled.form`
  width: 70%;
  height: 70%;
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
`
export const InputContainer = styled.div`
  width: 70%;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  margin: 0 0 2vw;
`
export const Label = styled.label`
  margin: 0 0 0.5vw;
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
`
export const TogglePassword = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  label {
    margin: 0;
  }
`
export const ToggleVisibility = styled.input`
  margin: 0 10px 0 0;
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
`
export const ReturnBtn = styled.button`
  border: none;
  background: none;
  font-size: 1em;
  cursor: pointer;

  :focus {
    outline: none;
  }
`

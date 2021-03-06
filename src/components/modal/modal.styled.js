import styled from "styled-components"
import { colors } from "../../theme"
import { small, medium, large, xlarge } from "../../breakpoints"

export const ModalWrapper = styled.main`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 80;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  visibility: ${props => (props.isOpen ? "visible" : "hidden")};
`
export const ModalContent = styled.section`
  width: 20%;
  height: 45%;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  align-items: center;
  -webkit-align-items: center;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  opacity: ${props => (props.isOpen ? 1 : 0)};
  transform: translateY(${props => (props.isOpen ? 0 : "50px")});
  transition: 0.4s ease-in-out;

  @media all and (max-width: ${small}) {
    width: 80%;
    height: 35%;
  }
  @media all and (min-width: ${small}) and (max-width: ${medium}) {
    width: 45%;
  }
  @media all and (min-width: ${medium}) and (max-width: ${large}) {
    width: 40%;
  }
  @media all and (min-width: ${large}) and (max-width: ${xlarge}) {
    width: 35%;
  }
`
export const Title = styled.h3`
  font-size: 1.8em;
  font-weight: 600;
  margin: 2vw 0 0;
  text-align: center;
`
export const UXText = styled.p`
  font-size: 1em;
  opacity: 0.8;
`
export const CTAButton = styled.button`
  width: 100%;
  padding: 20px 40px 20px;
  font-size: 1em;
  border: none;
  background-color: ${colors.cta};
  cursor: pointer;
  border-radius: 5px;
  font-weight: 600;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  justify-content: center;
  -webkit-justify-content: center;
  svg {
    margin: 0 0.5vw 0 0;
  }

  :focus {
    outline: none;
  }
  @media all and (max-width: ${small}) {
    font-size: 1.2em;
    margin: 2vw 0 0;
  }
`
export const Btns = styled.section`
  width: 100%;
  height: 35%;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  justify-content: space-between;
  -webkit-justify-content: space-between;

  @media all and (max-width: ${small}) {
    height: auto;
  }
`

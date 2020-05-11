import styled from "styled-components"
import { colors } from "../../theme"

export const ModalWrapper = styled.main`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 80;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  display: ${props => (props.isOpen ? "flex" : "none")};
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
`
export const Title = styled.h3`
  font-size: 1em;
`
export const CTAButton = styled.button`
  width: 100%;
  padding: 15px 30px 15px;
  font-size: 1em;
  border: none;
  background-color: ${colors.cta};
`

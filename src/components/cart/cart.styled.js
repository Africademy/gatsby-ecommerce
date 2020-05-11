import styled from "styled-components"
import { colors } from "../../theme"

export const CartWrapper = styled.form`
  width: 30vw;
  height: 100%;
  background-color: #ffffff;
  position: absolute;
  top: 0;
  right: ${props => (props.toggleCart ? 0 : "-30vw")};
  transition: 0.3s ease-in-out;
  z-index: 101;
  display: ${props => (props.toggleCart ? "block" : "none")};
`
export const Header = styled.section`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  padding: 0 2vw 0;
`
export const CloseCartBtn = styled.button`
  width: 3vw;
  height: 3vw;
  border: none;
  background: none;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
  cursor: pointer;

  :focus {
    outline: none;
  }
`
export const CartContent = styled.section`
  width: 100%;
  height: 90%;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  align-items: center;
  -webkit-align-items: center;
  overflow: scroll;
`
export const Total = styled.h3`
  font-size: 1.4em;
`
export const CheckoutBtn = styled.button`
  font-size: 1em;
  padding: 20px 40px 20px;
  border: none;
  border-radius: 50px;
  background-color: ${colors.cta};
  color: #000;
  font-weight: 600;
  cursor: pointer;
`
export const FillCart = styled.button`
  width: max-content;
  padding: 20px 40px 20px;
  border: none;
  background-color: ${colors.cta};
  font-size: 1em;
  font-weight: 600;
  cursor: pointer;
  :focus {
    outline: none;
  }
`
export const Summary = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  padding: 0 2vw 0;
  margin: 2vw 0 0;
  align-items: center;
  -webkit-align-items: center;
`

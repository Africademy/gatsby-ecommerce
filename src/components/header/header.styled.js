import styled from "styled-components"
import { small, medium, large, xlarge } from "../../breakpoints"
import { colors } from "../../theme"

export const HeaderWrapper = styled.header`
  width: 100vw;
  height: 10vh;
  padding: 0 5vw 0;
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 100;
`
export const Nav = styled.nav`
  width: 50%;
  @media all and (max-width: ${small}) {
    display: none;
  }
  @media all and (min-width: ${small}) and (max-width: ${medium}) {
    width: 30%;
  }
`
export const Menage = styled.section`
  width: 20%;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  justify-content: space-between;
  -webkit-justify-content: space-between;

  a {
    padding: 20px 40px 20px;
    background-color: ${colors.cta};
    color: #000;
    font-weight: 500;
    border-radius: 5px;

    @media all and (max-width: ${small}) {
      display: none;
    }
  }
  @media all and (max-width: ${small}) {
    width: 30%;
  }

  @media all and (min-width: ${small}) and (max-width: ${medium}) {
    width: 45%;
  }
  @media all and (min-width: ${medium}) and (max-width: ${large}) {
    width: 35%;
  }
  @media all and (min-width: ${large}) and (max-width: ${xlarge}) {
    width: 30%;
  }
`
export const ProductAmount = styled.div`
  position: absolute;
  transform: scale(${props => (props.cartLength > 0 ? 1 : 0)});
  transition: 0.3s ease-in-out;
  top: -20%;
  right: -20%;
  width: max-content;
  border-radius: 50px;
  height: max-content;
  background-color: #ffd410;
  padding: 5px 10px 5px;
  font-size: 1.1em;
  font-weight: 600;
`
export const CartBtn = styled.button`
  border: none;
  background: none;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
  cursor: pointer;
  position: relative;
  transform-origin: 0 100%;
  transition: 0.3s ease-in-out;

  :focus {
    outline: none;
  }
  :hover {
    transform: rotate(-10deg);
    transition: 0.3s ease-in-out;
  }
  :hover ${ProductAmount} {
    transform: rotate(10deg) scale(${props => (props.cartLength > 0 ? 1 : 0)});
  }
`
export const Value = styled.p`
  font-size: 1em;
`
export const Line = styled.span`
  width: 80%;
  height: 3px;
  border-radius: 10px;
  background-color: #000000;
  transform-origin: 0 50%;
  transition: 0.3s ease-in-out;
`
export const BurgerMenuBtn = styled.button`
  display: none;
  @media all and (max-width: ${small}) {
    display: flex;
    flex-flow: column;
    -webkit-flex-flow: column;
    justify-content: space-evenly;
    align-items: center;
    -webkit-align-items: center;
    height: 4vh;
    width: 6vh;
    cursor: pointer;
    border: none;
    background: none;

    span:nth-child(1) {
      ${props =>
        props.isMenu
          ? "transform: translateX(5px) translateY(-8px) rotate(45deg);"
          : ""}
    }
    span:nth-child(2) {
      ${props =>
        props.isMenu
          ? "transform: translateX(5px) translateY(8px) rotate(-45deg);"
          : ""}
    }
  }
`

import styled from "styled-components"
import { colors } from "../../theme"
import { small, medium, large, xlarge } from "../../breakpoints"

export const CartWrapper = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  z-index: 101;
  visibility: ${props => (props.toggleCart ? "visible" : "hidden")};
  display: ${props => (props.toggleCart ? "flex" : "none")};
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
`
export const CartContainer = styled.form`
  width: 50vw;
  height: 60vh;
  background-color: #f3f3f3;
  border-radius: 10px;
  overflow: scroll;

  @media all and (max-width: ${small}) {
    width: 100vw;
    height: 80vh;
    border-radius: 20px 20px 0 0;
    position: fixed;
    bottom: 0;
  }
  @media all and (min-width: ${small}) and (max-width: ${medium}) {
    width: 80vw;
  }
  @media all and (min-width: ${medium}) and (max-width: ${large}) {
    width: 70vw;
  }
  @media all and (min-width: ${large}) and (max-width: ${xlarge}) {
    width: 60vw;
  }
`
export const Header = styled.section`
  width: 50vw;
  height: 10vh;
  display: flex;
  flex-flow: row-reverse;
  -webkit-flex-flow: row-reverse;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  border-radius: 10px 10px 0 0;
  align-items: center;
  -webkit-align-items: center;
  padding: 0 2vw 0;
  background-color: #fff;
  position: fixed;
  z-index: 102;
  box-shadow: 0 4.9px 5.3px -21px rgba(0, 0, 0, 0.048),
    0 16.3px 17.9px -21px rgba(0, 0, 0, 0.072),
    0 73px 80px -21px rgba(0, 0, 0, 0.12);

  @media all and (max-width: ${small}) {
    width: 100%;
    padding: 0 5vw 0;
  }
  @media all and (min-width: ${small}) and (max-width: ${medium}) {
    width: 80vw;
  }
  @media all and (min-width: ${medium}) and (max-width: ${large}) {
    width: 70vw;
  }
  @media all and (min-width: ${large}) and (max-width: ${xlarge}) {
    width: 60vw;
  }
  @media all and (min-width: ${medium}) and (max-width: ${large}) {
  }
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
  @media all and (max-width: ${small}) {
    height: 10vw;
    width: 10vw;
  }
  @media all and (min-width: ${small}) and (max-width: ${medium}) {
    width: 6vw;
    height: 6vw;
  }
  @media all and (min-width: ${medium}) and (max-width: ${large}) {
    width: 5vw;
    height: 5vw;
  }
`
export const RemoveAllBtn = styled.button`
  width: 3vw;
  height: 100%;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
  border: none;
  background: none;
  cursor: pointer;
  position: relative;

  :focus {
    outline: none;
  }
  :before {
    content: "Remove all";
    display: block;
    width: max-content;
    padding: 5px 10px 5px;
    border-radius: 10px;
    position: absolute;
    bottom: -10%;
    background-color: #e9e9e9;
    color: #b51413;
    font-size: 1.2em;
    box-shadow: 0 4.9px 5.3px -21px rgba(0, 0, 0, 0.048),
      0 16.3px 17.9px -21px rgba(0, 0, 0, 0.072),
      0 73px 80px -21px rgba(0, 0, 0, 0.12);
    transition: 0.3s ease-in-out;
    transform-origin: 50% 0;
    transform: scale(0);
  }
  svg {
    display: flex;
    justify-content: center;
    align-items: center;
    g {
      transform: translate(20%, 20%);
    }
  }
  svg g path {
    transition: 0.3s ease-in-out;
  }
  :hover:before {
    transition: 0.3s ease-in-out;
    transform: scale(1);
  }
  :hover svg g path:nth-child(4) {
    transform-origin: 0 100%;
    transform: translate(2px, -4px) rotate(-10deg);
    transition: 0.3s ease-in-out;
  }
  :hover svg g path {
    stroke: #b51413;
    transition: 0.3s ease-in-out;
  }

  @media all and (max-width: ${small}) {
    height: 10vw;
    width: 10vw;
    :before {
      bottom: -60%;
    }
  }
  @media all and (min-width: ${small}) and (max-width: ${medium}) {
    width: 7vw;
    height: 7vw;
    :before {
      bottom: -50%;
    }
  }
  @media all and (min-width: ${medium}) and (max-width: ${large}) {
    width: 5vw;
    height: 5vw;
    :before {
      bottom: -50%;
    }
  }
  @media all and (min-width: ${large}) and (max-width: ${xlarge}) {
    width: 4vw;
    height: 4vw;
    :before {
      bottom: -50%;
    }
  }
`
export const CartContent = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  align-items: center;
  -webkit-align-items: center;
  overflow: scroll;
  ${props =>
    props.cartLength === 0 ? "padding: 12vh 0 0" : "margin: 12vh 0 13vh"};
  position: relative;
`
export const Total = styled.h3`
  font-size: 1.4em;
`
export const CheckoutBtn = styled.button`
  font-size: 1em;
  padding: ${props => (props.redirect ? "15px 30px 15px" : "20px 40px 20px")};
  border: none;
  border-radius: 50px;
  background-color: ${colors.cta};
  color: #000;
  font-weight: 600;
  width: max-content;
  cursor: pointer;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
  transition: 0.3s ease-in-out;

  :focus {
    outline: none;
  }

  @media all and (max-width: ${small}) {
    font-size: 1.2em;
  }
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
  width: 50vw;
  height: 10vh;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  padding: 0 2vw 0;
  margin: 2vw 0 0;
  align-items: center;
  -webkit-align-items: center;
  position: fixed;
  bottom: 20vh;
  border-radius: 0 0 10px 10px;
  box-shadow: 0 0px 5.3px -21px rgba(0, 0, 0, 0.048),
    0 0px 17.9px -21px rgba(0, 0, 0, 0.072),
    0 0px 80px -21px rgba(0, 0, 0, 0.12);

  @media all and (max-width: ${small}) {
    width: 100%;
    bottom: 0;
    padding: 0 5vw 0;
  }
  @media all and (min-width: ${small}) and (max-width: ${medium}) {
    width: 80vw;
  }
  @media all and (min-width: ${medium}) and (max-width: ${large}) {
    width: 70vw;
  }
  @media all and (min-width: ${large}) and (max-width: ${xlarge}) {
    width: 60vw;
  }
`

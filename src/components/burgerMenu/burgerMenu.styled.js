import styled from "styled-components"
import { small } from "../../breakpoints"

export const BurgerWrapper = styled.main`
  display: none;

  @media all and (max-width: ${small}) {
    display: flex;
    flex-flow: row-reverse;
    -webkit-flex-flow: row-reverse;
    align-items: center;
    -webkit-align-items: center;
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: -1;
    top: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
    visibility: ${props => (props.isMenu ? "visible" : "hidden")};
    transition: 0.3s ease-in-out;
  }
`
export const Menu = styled.nav`
  width: 80%;
  height: 98%;
  border-radius: 20px 0 0 20px;
  background-color: #fff;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  padding: 25vw 5vw 5vw;
  position: relative;

  transform: translateX(${props => (props.isMenu ? 0 : "80vw")});
  transition: 0.3s ease-in-out;
  a {
    display: block;
    padding: 0;
    background: none;
    transition: 0.3s ease-in-out;
    cursor: pointer;

    :hover {
      transform: translateX(5vw);
      transition: 0.3s ease-in-out;
      background: none;
    }
  }
  a:nth-child(3) {
    position: absolute;
    bottom: 15vw;
    padding: 20px 40px 20px;
    background-color: #000000;
    border-radius: 10px;

    button {
      color: #fff;
      font-size: 1.5em;
    }
  }
  section {
    position: absolute;
    bottom: 15vw;
  }
`
export const NavBtn = styled.button`
  width: max-content;
  border: none;
  background: none;
  line-height: 2em;
  font-size: 2.2em;

  :focus {
    outline: none;
  }
`

import styled from "styled-components"
import { colors } from "../../theme"
import { small } from "../../breakpoints"

export const AccountWrapper = styled.div`
  width: auto;
  min-width: 10vw;
  height: 100%;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  padding: 10px;
  border-radius: 20px;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  position: relative;

  :hover {
    transition: 0.3s ease-in-out;
    background-color: #efefef;
  }
  @media all and (max-width: ${small}) {
    display: none;
  }
`
export const ImageContainer = styled.div`
  width: 4vh;
  height: 4vh;
  border-radius: 50px;
  overflow: hidden;
  margin: 0 1vw 0 0;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
`
export const MyAccount = styled.h3`
  font-size: 1.1em;
  font-weight: 500;
  display: flex;
  align-items: center;
  -webkit-align-items: center;

  svg {
    margin: 0 0 0 1vw;
    transition: 0.3s ease-in-out;
    transform: rotate(${props => (props.dropdown ? "180deg" : 0)});
  }
`
export const Dropdown = styled.ul`
  width: 100%;
  position: absolute;
  bottom: -26vh;
  right: 0;
  background-color: #ffffff;
  transform-origin: 50% 0;
  opacity: ${props => (props.dropdown ? 1 : 0)};
  transform: scale(${props => (props.dropdown ? 1 : 0)});
  transition: 0.3s ease-in-out;
  box-shadow: 0 0.5px 2.2px rgba(0, 0, 0, 0.008),
    0 1.3px 5.3px rgba(0, 0, 0, 0.012), 0 2.4px 10px rgba(0, 0, 0, 0.015),
    0 4.2px 17.9px rgba(0, 0, 0, 0.018), 0 7.9px 33.4px rgba(0, 0, 0, 0.022),
    0 19px 80px rgba(0, 0, 0, 0.03);

  padding: 10px 0 10px;
  border-radius: 5px;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  justify-content: space-evenly;
  overflow: hidden;

  :before {
    content: "";
    display: block;
    height: 4px;
    width: 100%;
    position: absolute;
    top: 0;
    background-color: ${colors.cta};
  }
`
export const DropdownItem = styled.li`
  font-size: 1.1em;
  height: 50px;
  width: 100%;
  line-height: 1.8em;
  font-weight: 500;
  list-style-type: none;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  padding: 0 20px 0;
  transition: 0.3s ease-in-out;

  :hover {
    background-color: rgba(255, 193, 5, 0.3);
  }

  svg {
    margin: 0 10px 0 0;
  }
`
export const Name = styled.p`
  transition: 0.3s ease-in-out;
  :hover {
    transform: translateX(5px);
    transition: 0.3s ease-in-out;
  }
`

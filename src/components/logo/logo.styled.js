import styled from "styled-components"
import { colors } from "../../theme"

export const LogoImg = styled.img`
  height: 90%;
  object-fit: cover;
  transform: rotate(-40deg);
  transition: 0.3s ease-in-out;
`
export const LogoWrapper = styled.div`
  height: ${props => props.size};
  width: ${props => props.size};
  border-radius: 50px;
  background-color: ${colors.cta};
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
  transition: 0.3s ease-in-out;
  ${props => {
    if (props.isHeader) {
      return `
            height: 4vh;
            width: 4vh;
          `
    }
  }} :hover ${LogoImg} {
    transition: 0.3s ease-in-out;
    transform: rotate(-40deg) scale(1.1);
  }
`

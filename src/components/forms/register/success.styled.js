import styled from "styled-components"
import { small } from "../../../breakpoints"
import { colors } from "../../../theme"

export const RegisterSuccessWrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
  }
`
export const Content = styled.section`
  width: 100%;
  height: 25%;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;

  a {
    width: max-content;
    padding: 20px 40px 20px;
    background-color: ${colors.cta};
    cursor: pointer;
    font-size: 1em;
    font-weight: 500;
    transition: 0.3s ease-in-out;

    :hover {
      transition: 0.3s ease-in-out;
      transform: translateY(-5px);
      box-shadow: 0 1.9px 2.2px -10px rgba(255, 193, 5, 0.034),
        0 4.6px 5.3px -10px rgba(255, 193, 5, 0.048),
        0 8.6px 10px -10px rgba(255, 193, 5, 0.06),
        0 15.4px 17.9px -10px rgba(255, 193, 5, 0.072),
        0 28.8px 33.4px -10px rgba(255, 193, 5, 0.086),
        0 69px 80px -10px rgba(255, 193, 5, 0.12);
    }
  }

  @media all and (max-width: ${small}) {
    width: 80%;
    text-align: center;

    a {
      font-size: 1.2em;
    }
  }
`
export const Message = styled.h3`
  font-size: 1.5em;
`

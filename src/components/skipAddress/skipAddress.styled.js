import styled from "styled-components"

export const SkipWrapper = styled.section`
  width: 70%;
  height: 10vh;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  align-items: center;
  -webkit-align-items: center;
  justify-content: space-evenly;
`
export const Header = styled.p`
  width: 100%;
  text-align: center;
`
export const SubmitBtn = styled.button`
  font-size: 1em;
  border: none;
  background: none;
  cursor: pointer;

  :focus {
    outline: none;
  }
`

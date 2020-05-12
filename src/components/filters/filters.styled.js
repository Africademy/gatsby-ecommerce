import styled from "styled-components"
import { small } from "../../breakpoints"

export const FiltersWrapper = styled.section`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  margin: 0 0 2vw;
  overflow-x: scroll;

  @media all and (max-width: ${small}) {
    height: 15vh;
  }
`
export const FilterItem = styled.button`
  font-size: 1em;
  border: 1px solid #000;
  border-radius: 15px;
  padding: 15px 30px 15px;
  background: none;
  width: max-content;
  margin: 0 1vw 0 0;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  position: relative;
  overflow: hidden;
`

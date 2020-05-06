import styled from "styled-components"

export const FiltersWrapper = styled.section`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  margin: 0 0 2vw;
  overflow-x: scroll;
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

  :before {
    content: "";
    display: block;
    width: 50%;
    height: 100%;
    background-color: black;
    position: absolute;
    top: 0;
    left: -50%;
    transform: scale(1.2) rotate(5deg);
    transition: 0.6s ease-in-out;
  }
  :hover:before {
    left: 150%;
  }
`

import styled from "styled-components"
import { small, large, medium, xlarge } from "../../breakpoints"

export const ProductsWrapper = styled.main`
  width: 100vw;
  min-height: 90vh;
  height: auto;
  padding: 2vw 5vw 10vw;
  background-color: #f5f5f5;
  display: flex;
  flex-flow: column;

  @media all and (max-width: ${medium}) {
    height: auto;
  }
`
export const List = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 2vw;
  grid-row-gap: 2vw;

  @media all and (max-width: ${small}) {
    display: flex;
    flex-flow: column;
    -webkit-flex-flow: column;
  }
  @media all and (min-width: ${small}) and (max-width: ${large}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media all and (min-width: ${large}) and (max-width: ${xlarge}) {
    grid-template-columns: repeat(2, 1fr);
  }
`

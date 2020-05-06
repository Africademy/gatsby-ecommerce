import styled from "styled-components"

export const ProductsWrapper = styled.main`
  width: 100vw;
  height: 100vh;
  padding: 2vw 5vw 0;
  background-color: #f5f5f5;
  display: flex;
  flex-flow: column;
`
export const List = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 2vw;
`

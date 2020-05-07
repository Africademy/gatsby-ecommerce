import styled from "styled-components"

export const FadeWrapper = styled.main`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: ${props => (props.toggleCart ? 5 : -1)};
  top: 0;
  left: 0;
  opacity: ${props => (props.toggleCart ? 0.4 : 0)};
  background-color: #000;
`

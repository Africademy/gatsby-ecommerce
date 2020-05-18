import styled from "styled-components"

export const Img = styled.img`
  object-fit: cover;
  height: 100%;
  transition: 0.6s cubic-bezier(0.22, 1, 0.36, 1);
`
export const ImageContainer = styled.div`
  width: 12vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
  overflow: hidden;
  background-color: ${props => props.bg};

  :hover ${Img} {
    transform: scale(1.1);
  }
`

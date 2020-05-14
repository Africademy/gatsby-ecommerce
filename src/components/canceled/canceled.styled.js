import styled from "styled-components"

export const CanceledWrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  justify-content: center;
  -webkit-justify-content: center;

  a {
    padding: 20px 40px 20px;
    border-radius: 15px;
    background-color: #000000;
    color: #fff;
    text-decoration: none;
  }
`
export const Title = styled.h3`
  font-size: 2em;
`
export const Content = styled.section`
  width: 50%;
  height: 25%;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;
`

import React from "react"
import { SkipWrapper, Header, SubmitBtn } from "./skipAddress.styled"

const SkipAddress = ({ handleSkipAddress }) => {
  return (
    <SkipWrapper>
      <Header>or</Header>
      <SubmitBtn onClick={e => handleSkipAddress(e)}>
        Skip this step and add address later
      </SubmitBtn>
    </SkipWrapper>
  )
}

export default SkipAddress

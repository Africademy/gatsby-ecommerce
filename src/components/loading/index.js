import React from "react"
import { LoadingWrapper, Spinner, InsideCircle } from "./loading.styled"

const Loading = ({ spinnerColor, borderColor }) => {
  return (
    <LoadingWrapper>
      <Spinner color={borderColor}>
        <InsideCircle color={spinnerColor} />
      </Spinner>
    </LoadingWrapper>
  )
}

export default Loading

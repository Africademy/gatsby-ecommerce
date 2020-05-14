import React from "react"
import { ImageContainer } from "./avatar.styled"

const Avatar = ({ height }) => {
  return (
    <ImageContainer>
      <svg
        height={height}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none">
          <path
            d="M7 18v-1a5 5 0 0 1 10 0v1"
            stroke="#000000"
            strokeWidth="1.5"
          />
          <path
            d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
            stroke="#000000"
            strokeLinecap="round"
            strokeWidth="1.5"
          />
          <circle cx="12" cy="12" r="11" stroke="#000000" strokeWidth="1.5" />
        </g>
      </svg>
    </ImageContainer>
  )
}

export default Avatar

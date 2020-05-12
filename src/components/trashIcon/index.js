import React from "react"

const Trash = ({ width }) => {
  return (
    <svg width={width} viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <g fill="none">
        <path
          d="M19 11v9.4a.6.6 0 0 1-.6.6H5.6a.6.6 0 0 1-.6-.6V11"
          stroke="#000"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <path
          d="M10 17v-6"
          stroke="#000000"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <path
          d="M14 17v-6"
          stroke="#000000"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <path
          d="M21 7h-5M3 7h5m0 0V3.6a.6.6 0 0 1 .6-.6h6.8a.6.6 0 0 1 .6.6V7M8 7h8"
          stroke="#000"
          strokeLinecap="round"
          strokeWidth="2"
        />
      </g>
    </svg>
  )
}

export default Trash

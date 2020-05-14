import React from "react"

const WalletIcon = ({ height }) => {
  return (
    <svg height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <g fill="#000000" stroke="#000000" strokeLinecap="square" strokeWidth="2">
        <path
          d="M21,12V5H3 C1.895,5,1,4.105,1,3v17c0,1.657,1.343,3,3,3h17v-7"
          fill="none"
          stroke="#000000"
        />
        <path
          d="M17,2V1H3 C1.895,1,1,1.895,1,3v0c0,1.105,0.895,2,2,2"
          fill="none"
          stroke="#000000"
        />
        <path
          d="M23,16h-5 c-1.105,0-2-0.895-2-2l0,0c0-1.105,0.895-2,2-2h5V16z"
          fill="none"
        />
      </g>
    </svg>
  )
}

export default WalletIcon

import React from "react"
import { MyAccount } from "./userData.styled"

const UserData = ({ logged, dropdown, icon }) => {
  return (
    <MyAccount dropdown={dropdown}>
      {logged.userData !== undefined ? (
        `${logged.userData.firstName} ${logged.userData.surName}`
      ) : (
        <p>My Account</p>
      )}
      {icon ? (
        <svg height={25} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g fill="none">
            <path
              d="M6 9l6 6 6-6"
              stroke="#000000"
              strokeLinecap="round"
              strokeWidth="1.5"
            />
          </g>
        </svg>
      ) : (
        ""
      )}
    </MyAccount>
  )
}

export default UserData

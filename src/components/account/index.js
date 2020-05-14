import React, { useState } from "react"
import { AccountWrapper, Dropdown, DropdownItem, Name } from "./account.styled"
import { useDispatch, useSelector } from "react-redux"
import { logIn } from "../../actions"
import Avatar from "./avatar"
import UserData from "./userData"

const Account = () => {
  const [dropdown, setDropdown] = useState(false)
  const dispatch = useDispatch()
  const logged = useSelector(state => state.isLogged)
  return (
    <AccountWrapper onClick={() => setDropdown(!dropdown)}>
      <Avatar height={30} />
      <UserData logged={logged} dropdown={dropdown} icon={true} />
      <Dropdown dropdown={dropdown}>
        <DropdownItem>
          <svg
            height={25}
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="#000000">
              <path d="M491.729 112.971L259.261.745a7.503 7.503 0 0 0-6.521 0L20.271 112.971a7.5 7.5 0 0 0-4.239 6.754v272.549a7.5 7.5 0 0 0 4.239 6.754l232.468 112.226a7.504 7.504 0 0 0 6.522 0l232.468-112.226a7.5 7.5 0 0 0 4.239-6.754V119.726a7.502 7.502 0 0 0-4.239-6.755zM256 15.828l215.217 103.897-62.387 30.118a7.434 7.434 0 0 0-1.27-.8L193.805 45.853 256 15.828zm-79.133 38.505l214.904 103.746-44.015 21.249L132.941 75.624l43.926-21.291zm219.932 117.974v78.546l-41.113 19.848v-78.546l41.113-19.848zm84.169 215.261L263.5 492.55V236.658l51.873-25.042a7.5 7.5 0 1 0-6.522-13.508L256 223.623l-20.796-10.04a7.498 7.498 0 0 0-10.015 3.493 7.5 7.5 0 0 0 3.493 10.015l19.818 9.567V492.55L31.032 387.566V131.674l165.6 79.945a7.463 7.463 0 0 0 3.255.748 7.5 7.5 0 0 0 3.266-14.256l-162.37-78.386 74.505-35.968L340.582 192.52c.033.046.07.087.104.132v89.999a7.502 7.502 0 0 0 10.761 6.754l56.113-27.089a7.499 7.499 0 0 0 4.239-6.754v-90.495l69.169-33.392v255.893z" />
              <path d="M92.926 358.479L58.811 342.01a7.5 7.5 0 0 0-6.522 13.508l34.115 16.469a7.463 7.463 0 0 0 3.255.748 7.5 7.5 0 0 0 6.759-4.241 7.499 7.499 0 0 0-3.492-10.015z" />
              <path d="M124.323 338.042l-65.465-31.604a7.501 7.501 0 0 0-6.521 13.509l65.465 31.604a7.477 7.477 0 0 0 3.255.748 7.5 7.5 0 0 0 3.266-14.257z" />
            </g>
          </svg>
          <Name>Orders</Name>
        </DropdownItem>
        <DropdownItem>
          <svg
            height={25}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="#000000">
              <path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z" />
            </g>
          </svg>
          <Name>Returns</Name>
        </DropdownItem>
        <DropdownItem>
          <svg
            height={25}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none">
              <path
                d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                stroke="#000000"
                strokeLinecap="round"
                strokeWidth="1.5"
              />
              <path
                d="M21.79 10.763l-2.168-.368-1.097-2.65.358-.502.918-1.284a.259.259 0 0 0-.029-.339L18.39 4.237a.252.252 0 0 0-.334-.03l-1.79 1.276-2.707-1.113-.103-.608-.26-1.543a.26.26 0 0 0-.26-.219h-1.954a.261.261 0 0 0-.26.222l-.372 2.18-2.645 1.114-1.782-1.284a.252.252 0 0 0-.15-.046.251.251 0 0 0-.185.08L4.2 5.648a.263.263 0 0 0-.03.339l1.283 1.802-1.08 2.657-.611.103-1.543.26a.26.26 0 0 0-.219.26v1.955c0 .13.091.238.222.26l2.18.371L5.515 16.3l-.364.506-.912 1.267a.26.26 0 0 0 .03.34l1.383 1.382a.252.252 0 0 0 .334.03l1.804-1.285 2.606 1.072.102.61.26 1.559a.26.26 0 0 0 .26.219h1.958a.26.26 0 0 0 .26-.221l.367-2.166 2.651-1.098.502.36 1.289.92c.04.03.092.046.149.046.07 0 .132-.025.184-.078l1.384-1.383a.263.263 0 0 0 .029-.339l-1.276-1.792 1.098-2.651.608-.101 1.558-.26a.26.26 0 0 0 .22-.26v-1.97a.244.244 0 0 0-.21-.244z"
                stroke="#000000"
                strokeLinecap="round"
                strokeWidth="1.5"
              />
            </g>
          </svg>
          <Name>Settings</Name>
        </DropdownItem>
        <DropdownItem onClick={() => dispatch(logIn())}>
          <svg
            height={25}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none">
              <path
                d="M12 12h7m0 0l-3 3m3-3l-3-3"
                stroke="#000000"
                strokeLinecap="round"
                strokeWidth="1.5"
              />
              <path
                d="M19 6V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1"
                stroke="#000000"
                strokeLinecap="round"
                strokeWidth="1.5"
              />
            </g>
          </svg>
          <Name>Log out</Name>
        </DropdownItem>
      </Dropdown>
    </AccountWrapper>
  )
}

export default Account

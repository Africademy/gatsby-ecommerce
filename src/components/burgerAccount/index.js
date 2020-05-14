import React from "react"
import { BurgerAccountWrapper } from "./burgerAccount.styled"
import Avatar from "../account/avatar"
import UserData from "../account/userData"

const BurgerAccount = ({ logged }) => {
  return (
    <BurgerAccountWrapper>
      <Avatar height={80} />
      <UserData logged={logged} dropdown={false} icon={false} />
    </BurgerAccountWrapper>
  )
}

export default BurgerAccount

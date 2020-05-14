import React from "react"
import {
  CanceledWrapper,
  Title,
  Content,
} from "../components/canceled/canceled.styled"
import { HeaderlessLayout } from "../components/forms/login/login.styled"
import { Link } from "gatsby"

const Canceled = () => {
  return (
    <CanceledWrapper>
      <HeaderlessLayout />
      <Content>
        <Title>Your order has been canceled</Title>
        <Link to="/">Return to home page</Link>
        <Link to="/products">Try again</Link>
      </Content>
    </CanceledWrapper>
  )
}

export default Canceled

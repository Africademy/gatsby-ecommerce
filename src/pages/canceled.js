import React from "react"
import { CanceledWrapper, Title } from "../components/canceled/canceled.styled"
import { Link } from "gatsby"

const Canceled = () => {
  return (
    <CanceledWrapper>
      <Title>Your order has been canceled</Title>
      <Link to="/">Return to home page</Link>
      <Link to="/products">Try again</Link>
    </CanceledWrapper>
  )
}

export default Canceled

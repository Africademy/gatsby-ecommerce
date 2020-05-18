import React from "react"
import {
  NotFoundWrapper,
  NotFound,
  FourOhFour,
  Round,
  Message,
} from "../components/404/404.styled"
import { HeaderlessLayout } from "../components/forms/login/login.styled"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const NotFoundPage = () => {
  return (
    <NotFoundWrapper>
      <HeaderlessLayout />
      <NotFound>
        <Round>
          <FourOhFour>404</FourOhFour>
        </Round>
        <Message>This page doesn't exist</Message>
        <AniLink to="/">Take me to home page</AniLink>
      </NotFound>
    </NotFoundWrapper>
  )
}

export default NotFoundPage

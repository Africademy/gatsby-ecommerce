import React, { Component } from "react"

import Layout from "../components/layout"
import { useDispatch, useSelector } from "react-redux"
import { logIn } from "../actions"
import Image from "../components/image"
import SEO from "../components/seo"
import { loadStripe } from "@stripe/stripe-js"

class IndexPage extends Component {
  componentDidMount = async () => {
    this.stripe = await loadStripe("pk_test_12OvtkoNyXZih5pqyn0EYvn100iLl3Oay0")
  }
  handlePay = async e => {
    e.preventDefault()

    this.stripe
      .redirectToCheckout({
        items: [{ sku: "sku_GhbijDzfXGQAHa", quantity: 1 }],

        // https://stripe.com/docs/payments/checkout/fulfillment
        successUrl: "http://localhost:8000/success",
        cancelUrl: "http://localhost:8000/canceled",
      })
      .then(function (result) {
        if (result.error) {
          const displayError = document.getElementById("error-message")
          displayError.textContent = result.error.message
        }
      })
  }
  render() {
    return <Layout></Layout>
  }
}

export default IndexPage

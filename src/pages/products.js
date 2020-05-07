import React, { Component } from "react"
import Layout from "../components/layout"
import { ProductsWrapper, List } from "../components/products/products.styled"
import Product from "../components/product"
import Filters from "../components/filters"
import { StaticQuery, graphql } from "gatsby"
import { loadStripe } from "@stripe/stripe-js"

const PRODUCTS = graphql`
  query Products {
    allStripeSku {
      nodes {
        id
        attributes {
          name
        }
        currency
        image
        price
      }
    }
  }
`

class Products extends Component {
  componentDidMount = async () => {
    this.stripe = await loadStripe("pk_test_12OvtkoNyXZih5pqyn0EYvn100iLl3Oay0")
  }

  render() {
    return (
      <Layout>
        <ProductsWrapper>
          <Filters />
          <List>
            <StaticQuery
              query={PRODUCTS}
              render={({ allStripeSku: nodes }) => (
                <Product stripe={this.stripe} product={nodes} />
              )}
            />
          </List>
        </ProductsWrapper>
      </Layout>
    )
  }
}

export default Products

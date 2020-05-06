import React from "react"
import Layout from "../components/layout"
import { ProductsWrapper, List } from "../components/products/products.styled"
import Product from "../components/product"
import Filters from "../components/filters"
import { StaticQuery, graphql } from "gatsby"

const PRODUCTS = graphql`
  query Products {
    allStripeSku {
      edges {
        node {
          price
          attributes {
            name
          }
          image
          currency
        }
      }
    }
  }
`

const Products = () => {
  return (
    <Layout>
      <ProductsWrapper>
        <Filters />
        <List>
          <StaticQuery
            query={PRODUCTS}
            render={({ allStripeSku: edges }) => (
              <Product product={edges.edges} />
            )}
          />
        </List>
      </ProductsWrapper>
    </Layout>
  )
}

export default Products

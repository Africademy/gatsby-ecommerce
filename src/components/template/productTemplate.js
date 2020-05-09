import React from "react"
import Layout from "../layout"

const Template = ({
  location: {
    state: { product },
  },
}) => {
  console.log(product)
  return (
    <Layout>
      <h3>{product.attributes.name}</h3>
    </Layout>
  )
}

export default Template

const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const productTemplate = path.resolve(
    `./src/components/template/productTemplate.js`
  )
  const result = await graphql(`
    query {
      allStripeSku {
        nodes {
          id
          image
          price
          attributes {
            name
          }
        }
      }
    }
  `)

  result.data.allStripeSku.nodes.forEach(node => {
    createPage({
      path: `/products/${node.id}`,
      component: productTemplate,
      context: {
        product: node,
      },
    })
  })
}

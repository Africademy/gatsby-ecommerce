const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allStripeSku {
        nodes {
          id
        }
      }
    }
  `)

  result.data.allStripeSku.nodes.forEach(node => {
    createPage({
      path: `/products/${node.id}`,
      component: path.resolve(`./src/components/template/productTemplate.js`),
      context: {
        product: node,
      },
    })
  })
}

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

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

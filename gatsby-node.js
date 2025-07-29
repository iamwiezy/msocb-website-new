exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allNodeTraining {
        nodes {
          id
          path {
            alias
          }
        }
      }
    }
  `)

  result.data.allNodeTraining.nodes.forEach((node) => {
    createPage({
      path: node.path.alias, // e.g. "/training-organic-certification-..."
      component: require.resolve("./src/templates/training-detail.js"),
      context: {
        id: node.id,
      },
    })
  })
}

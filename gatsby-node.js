const path = require('path');
const tutorials = require('./src/data/tutorials.json');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const postTemplate = path.resolve('src/templates/blogPost.js');
  const tutorialTemplate = path.resolve('src/templates/tutorial.js');

  tutorials.forEach(tutorial => {
    const path = tutorial.link;
    createPage({
      path,
      component: tutorialTemplate,
      context: tutorial
    })
  })

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              path
              title
              date
              summary
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors);
    }

    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate
      })
    })
  })
}

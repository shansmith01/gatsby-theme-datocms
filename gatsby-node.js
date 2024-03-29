/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`);

exports.onCreatePage = ({ page, actions }, themeOptions) => {
  const { createPage, deletePage } = actions;
  // First delete the incoming page that was automatically created by Gatsby
  deletePage(page);
  // You can access the variable "house" in your page queries now
  createPage({
    ...page,
    context: {
      ...page.context,
      themeOptions
    }
  });
};

exports.createPages = ({ graphql, actions }, themeOptions) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsPage {
          edges {
            node {
              slug
            }
          }
        }
        allDatoCmsArticle {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allDatoCmsPage.edges.map(({ node }) => {
        createPage({
          path: `${node.slug}/`,
          component: require.resolve("./src/templates/pages.js"),
          context: {
            slug: node.slug
          }
        });
      });
      result.data.allDatoCmsArticle.edges.map(({ node }) => {
        createPage({
          path: `blog/${node.slug}/`,
          component: require.resolve("./src/templates/blog.js"),
          context: {
            slug: node.slug,
            locale: "en"
          }
        });
      });

      resolve();
    });
  });
};

const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path");

/*
// Use for "Extending Nodes" that would be created at build time.
exports.onCreateNode = ({ node, getNode, actions }) => {
  // if want to automatically generate slug from the post-file-name
  // We are manually adding slug filed in frontmatter of the post so we don't really need this step.
  const { createNodeField } = actions;
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "posts" });
    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
  }

  // This Graphql Query could be use to fetch generated slugs 
  // The newly added slug could be found in **allMarkdownRemark.nodes.fields.slug** (The Graphiql Playground might not be able to detect *fields* field while querying in it.)
};
*/

// Use for "creating Dynamic Pages", pages would dynamically created at build time.
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allSanityArticle {
        nodes {
          slug
        }
      }
    }
  `).then((results) => {
    results.data.allSanityArticle.nodes.forEach((node) => {
      createPage({
        path: node.slug,
        component: path.resolve("./src/templates/article.js"),
        // we can use slug variable passed from here, inslide the "Article Template" to query data for "Single Post".
        context: {
          slug: node.slug,
        },
      });
    });
  });
};

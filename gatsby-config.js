/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Delicious Experiences`,
    siteUrl: `https://www.deliciousexperiences.com/blog/`,
    description:
      "Delicious Experiences is Food Blog where customers can learn about different flavours of life.",
    keywords: "Delicious, food, drinks, bevrages, experience",
    image: "/static/2c0e72c05b9db0ce1ef645e50be94cee/f19f8/showcase.webp",
  },
  plugins: [
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `sye9c4pa`,
        dataset: `production`,
        token:
          "skSPnb2UsXrLuj8RHmLTRBQnuWJIIvNKYA7O4aY2RQq9U39fjxQfkAuFFOeelmwjrcpWGeuJNF8YP7C4LpTZVEY3y5oJ6GjdASpx4UJFOY7N2aOrSUBfJjqISZqHAMs3byZrU6E9GCJzQn41KENafIGXBKKp9404cP2g5DJ5NeGOgdFMhsfs",
        graphqlTag: "experiment",
        watchMode: true,
        overlayDrafts: true,
      },
    },
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/content/assets/images/icon.png",
        name: "Delicious Experiences",
        short_name: "DelExp",
        start_url: "/",
        background_color: "#F8F9FA",
        theme_color: "#FFFFFF",
        display: "standalone",
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/content/assets/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: "./src/content/posts",
      },
      __key: "posts",
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": "src/components",
          "@containers": "src/containers",
          "@pages": "src/pages",
          "@templates": "src/templates",
          "@posts": "src/content/posts",
        },
        extensions: ["js", "jsx"],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {},
    },
    // {
    //   resolve: `gatsby-source-wordpress`,
    //   options: {
    //     url: "http://localhost/wordpress/graphql",
    //   },
    // },
  ],
};

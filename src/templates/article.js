import * as React from "react";

import { graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

import { Layout, FeaturedPost, Seo } from "@components";
import { formatDate } from "../utils/formatDate";

function Article({ data }) {
  const article = data.wpPost;

  const image = getImage(article.featuredImage.node);
  return (
    <Layout>
      <div className="relative">
        <GatsbyImage
          className="w-full h-95vh"
          image={image}
          alt={article.title}
        />
        <div className=" mb-40 flex justify-center">
          <FeaturedPost
            className="absolute bottom-[-110px]"
            category={article.categories.nodes[0].name}
            title={article.title}
            date={formatDate(Date(article.date))}
            slug={article.slug}
          />
        </div>
      </div>
      <div
        style={{ marginBottom: 80 }}
        className="mx-auto max-w-4xl bg-white blog"
        dangerouslySetInnerHTML={{ __html: article.content }}
      ></div>
    </Layout>
  );
}

export const Head = ({ data }) => <Seo data={data.wpPost} />;

export const query = graphql`
  query GetSinglePost($slug: String!) {
    wpPost(slug: { eq: $slug }) {
      slug
      title
      excerpt
      date
      categories {
        nodes {
          name
        }
      }
      content
      featuredImage {
        node {
          gatsbyImage(height: 700, width: 1200)
        }
      }
    }
  }
`;

export default Article;

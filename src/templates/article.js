import * as React from "react";

import blockToHtml from "@sanity/block-content-to-html";
import { graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

import { Layout, FeaturedPost, Seo } from "@components";
import { formatDate } from "../utils/formatDate";

function Article({ data }) {
  const article = data.sanityArticle;

  const image = getImage(article.featured_image.asset);
  return (
    <Layout solid>
      <div className="relative">
        <GatsbyImage
          className="w-full h-95vh"
          image={image}
          alt={article.title}
        />
        <div className=" mb-40 flex justify-center">
          <FeaturedPost
            className="absolute bottom-[-110px]"
            category={article.category}
            title={article.title}
            date={formatDate(Date(article.date))}
            slug={article.slug}
          />
        </div>
      </div>
      {/* It's better to use custom styles of each block using serializers
       using switch statements. here we didn't use custom serializers.
      */}
      <div
        style={{ marginBottom: 80 }}
        className="mx-auto max-w-4xl bg-white blog"
        dangerouslySetInnerHTML={{
          __html: blockToHtml({
            blocks: article.content,
            projectId: "sye9c4pa",
            dataset: "production",
          }),
        }}
      ></div>
    </Layout>
  );
}

export const Head = ({ data }) => <Seo data={data.sanityArticle} />;

export const query = graphql`
  query GetSinglePost($slug: String!) {
    sanityArticle(slug: { eq: $slug }) {
      id: _id
      title
      category
      date
      excerpt: meta_desc
      content: _rawContent
      featured_image {
        asset {
          gatsbyImageData
        }
      }
    }
  }
`;

export default Article;

import * as React from "react";

import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import { Layout, FeaturedPost, PostGrid, Post, Seo } from "@components";
import { formatDate } from "../utils/formatDate";

const IndexPage = ({ data }) => {
  const featuredPost = data.featured.nodes[0];
  const popularPosts = data.top.nodes;
  const allPosts = data.all.nodes;

  return (
    <Layout>
      <div className="showcase mb-40 flex justify-center">
        <FeaturedPost
          className="absolute bottom-[-110px]"
          category={featuredPost.category}
          title={featuredPost.title}
          date={formatDate(Date(featuredPost.date))}
          slug={featuredPost.slug}
        />
      </div>
      <div className="max-w-7xl mx-auto">
        <PostGrid>
          {popularPosts.map((cur) => {
            const image = getImage(cur.featured_image.asset);

            return (
              <Post
                key={cur.id}
                image={image}
                category={cur.category}
                date={formatDate(Date(cur.date))}
                title={cur.title}
                slug={cur.slug}
              />
            );
          })}
        </PostGrid>
      </div>
      <div className="flex justify-between items-center max-w-4xl mx-auto p-8 my-24 bg-[#FAF7EE]">
        <div className="mr-4">
          <h2 className="font-semibold text-2xl">Join Our Newsletter</h2>
          <p className="text-sm">
            Enter your email and we'll keep you posted with news and updates!
          </p>
        </div>
        <div className="ml-4  flex justify-between items-center font-semibold flex-1 bg-white">
          <input
            className=" py-4 px-2 w-full outline-none"
            placeholder="Enter your Email.."
          />
          <button className="bg-black text-white text-base uppercase mr-1 rounded-md p-3">
            Subscripe
          </button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto my-28">
        <PostGrid>
          {allPosts.map((cur) => {
            const image = getImage(cur.featured_image.asset);

            return (
              <Post
                key={cur.id}
                image={image}
                category={cur.category}
                date={formatDate(Date(cur.date))}
                title={cur.title}
                slug={cur.slug}
              />
            );
          })}
        </PostGrid>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo />;

export const query = graphql`
  {
    featured: allSanityArticle(filter: { slug: { eq: "article-1" } }) {
      nodes {
        id: _id
        title
        slug
        date
        category
        excerpt: meta_desc
        content: _rawContent
        featured_image {
          asset {
            gatsbyImageData
          }
        }
      }
    }
    top: allSanityArticle(
      filter: { slug: { ne: "article-1" } }
      limit: 3
      skip: 0
    ) {
      nodes {
        id: _id
        title
        slug
        date
        category
        excerpt: meta_desc
        content: _rawContent
        featured_image {
          asset {
            gatsbyImageData
          }
        }
      }
    }
    all: allSanityArticle(filter: { slug: { ne: "article-1" } }, skip: 3) {
      nodes {
        id: _id
        title
        slug
        date
        category
        excerpt: meta_desc
        content: _rawContent
        featured_image {
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

import * as React from "react";

import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import { Layout, FeaturedPost, PostGrid, Post, Seo } from "@components";
import { formatDate } from "../utils/formatDate";

const IndexPage = ({ data }) => {
  const featuredPost = data.featuredPost.nodes[0];
  const populatPosts = data.popularPosts.nodes;
  const allPosts = data.allPosts.nodes;

  return (
    <Layout>
      <div className="showcase mb-40 flex justify-center">
        <FeaturedPost
          className="absolute bottom-[-110px]"
          category={featuredPost.categories.nodes[0].name}
          title={featuredPost.title}
          date={formatDate(Date(featuredPost.date))}
          slug={featuredPost.slug}
        />
      </div>
      <div className="max-w-7xl mx-auto">
        <PostGrid>
          {populatPosts.map((cur) => {
            const image = getImage(cur.featuredImage.node);

            return (
              <Post
                key={cur.id}
                image={image}
                category={cur.categories.nodes[0].name}
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
            const image = getImage(cur.featuredImage.node);

            return (
              <Post
                key={cur.id}
                image={image}
                category={cur.categories.nodes[0].name}
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
    featuredPost: allWpPost(
      filter: {
        slug: {
          eq: "how-to-write-perfect-seo-meta-description-tips-examples-2023"
        }
      }
    ) {
      nodes {
        id
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
            gatsbyImage(width: 563, height: 330)
          }
        }
      }
    }
    popularPosts: allWpPost(
      skip: 0
      limit: 3
      filter: {
        slug: {
          ne: "how-to-write-perfect-seo-meta-description-tips-examples-2023"
        }
      }
    ) {
      nodes {
        id
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
            gatsbyImage(width: 563, height: 330)
          }
        }
      }
    }

    allPosts: allWpPost(
      skip: 3
      filter: {
        slug: {
          ne: "how-to-write-perfect-seo-meta-description-tips-examples-2023"
        }
      }
    ) {
      nodes {
        id
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
            gatsbyImage(width: 563, height: 330)
          }
        }
      }
    }
  }
`;

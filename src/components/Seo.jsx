import * as React from "react";

import { graphql, useStaticQuery } from "gatsby";

export function Seo({ data }) {
  const query = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          defaultTitle: title
          defaultDesc: description
          defaultUrl: siteUrl
          defaultImage: image
          defaultKeywords: keywords
        }
      }
    }
  `);

  const seo = {
    title: data?.title ?? query.site.siteMetadata.defaultTitle,
    desc: renderHTML(data?.excerpt) ?? query.site.siteMetadata.defaultDesc,
    keywords:
      data?.categories?.nodes[0]?.name ??
      query.site.siteMetadata.defaultKeywords,
    image: query.site.siteMetadata.defaultImage,
    url: query.site.siteMetadata.defaultUrl,
  };

  return (
    <>
      <html lang="en" />
      <meta name="description" content={seo.desc} />
      <meta name="keywords" content={seo.keywords} />
      <meta property="og:image" content={seo.image} />
      <meta name="author" content="Junaid Javed" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.desc} />
      <meta property="og:url" rel="canonical" content={seo.url} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
        rel="stylesheet"
      ></link>
      <title>{seo.title}</title>
    </>
  );
}

const renderHTML = (html) => {
  const regex = /<[^<>]+>/gm;

  return html?.split(" ")?.slice(0, -1)?.join(" ")?.replace(regex, "");
};

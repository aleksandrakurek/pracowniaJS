import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        siteName: name
        defaultImage: image
        defaultType: type
        fbAdmins
      }
    }
  }
`;

const SEO = ({ title, description, image, pathname, type }) => (
  <StaticQuery
    query={query}
    render={({
               site: {
                 siteMetadata: {
                   defaultTitle,
                   titleTemplate,
                   defaultDescription,
                   siteName,
                   siteUrl,
                   defaultImage,
                   defaultType,
                   fbAdmins,
                 },
               },
             }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: image || defaultImage,
        url: `${siteUrl}${pathname || "/"}`,
        type: type || defaultType,
      };

      return (
        <Helmet title={seo.title} titleTemplate={titleTemplate}>
          {/* Basic metadata */}
          <meta name="description" content={seo.description} />
          <meta name="image" content={seo.image} />

          {/* Itemprops */}
          <meta itemprop="name" content={siteName} />
          <meta itemprop="description" content={seo.description} />
          <meta itemprop="image" content={seo.image} />

          {/* OpenGraph tags */}
          <meta property="og:title" content={seo.title} />
          <meta property="og:description" content={seo.description} />
          <meta property="og:image" content={seo.image} />
          <meta property="og:url" content={seo.url} />
          <meta property="og:site_name" content={siteName} />
          <meta property="fb:admins" content={fbAdmins} />
          <meta property="og:type" content={seo.type} />

          {/* Twitter tags */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={seo.title} />
          <meta name="twitter:description" content={seo.description} />
          <meta name="twitter:image" content={seo.image} />

          {/* Canonical link */}
          <link rel="canonical" href={seo.url} />
        </Helmet>
      );
    }}
  />
);

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  type: PropTypes.string,
};

export default SEO;
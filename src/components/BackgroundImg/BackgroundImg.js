import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import * as P from './parts';

export default props => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "hero_image2.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => <BackgroundSection data={data} {...props} />}
  />
);

const BackgroundSection = ({ data, children, className, imageUrl }) => {
  const imageData = data.desktop.childImageSharp.fluid;

  if (imageUrl) {
    return (
      <P.StyledBackground imageUrl={imageUrl} className={className}>
        {children}
      </P.StyledBackground>
    );
  }

  return (
    <BackgroundImage
      Tag="section"
      fluid={imageData}
      backgroundColor={'#040e18'}
      className={className}
    >
      {children}
    </BackgroundImage>
  );
};

BackgroundSection.propTypes = {
  children: PropTypes.node.isRequired,
  imageUrl: PropTypes.string,
};
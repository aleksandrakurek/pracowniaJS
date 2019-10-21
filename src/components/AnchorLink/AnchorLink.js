import PropTypes from 'prop-types';
import React from 'react';
import * as P from './parts';

const AnchorLink = ({ target, children, white, grey, medium, bold, className, uppercase, sizeValue, href, underline, onClick, styledLink }) => (
  <P.Item
    target={target}
    white={white}
    grey={grey}
    medium={medium}
    bold={bold}
    uppercase={uppercase}
    sizeValue={sizeValue}
    underline={underline}
    styledLink={styledLink}
    href={href}
    onClick={onClick}
    className={className}
  >
    {children}
  </P.Item>
);

AnchorLink.propTypes = {
  children: PropTypes.node.isRequired,
  white: PropTypes.bool,
  grey: PropTypes.bool,
  medium: PropTypes.bool,
  bold: PropTypes.bool,
  uppercase: PropTypes.bool,
  sizeValue: PropTypes.number,
  href: PropTypes.string,
  underline: PropTypes.bool,
  styledLink: PropTypes.bool,
  className: PropTypes.string,
  target: PropTypes.string,
};

export default AnchorLink;
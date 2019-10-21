import React from 'react';
import PropTypes from 'prop-types';
import * as P from './parts';

const Link = ({ children, white, grey, medium, bold, uppercase, sizeValue, href, to, underline, unstyled, className }) => (
  <P.Item
    white={white}
    grey={grey}
    medium={medium}
    bold={bold}
    uppercase={uppercase}
    sizeValue={sizeValue}
    href={href}
    underline={underline}
    to={to}
    unstyled={unstyled}
    className={className}
  >
    {children}
  </P.Item>
);

Link.propTypes = {
  children: PropTypes.node.isRequired,
  white: PropTypes.bool,
  grey: PropTypes.bool,
  medium: PropTypes.bool,
  bold: PropTypes.bool,
  uppercase: PropTypes.bool,
  sizeValue: PropTypes.string,
  href: PropTypes.string,
  to: PropTypes.string,
  underline: PropTypes.bool,
  unstyled: PropTypes.bool,
};

export default Link;
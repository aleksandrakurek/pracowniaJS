import React from 'react';
import styled from 'styled-components';
import { colors } from 'config';
import { Link } from 'gatsby';

export const Item = styled(({ sizeValue, bold, underline, ...restProps }) => <Link {...restProps} />)`
  font-style: normal;
  font-stretch: normal;
  line-height: 22px;
  letter-spacing: -0.2px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  position: relative;
  
  color: ${colors.azure};
  font-weight: ${props => props.medium ? 500 : props.bold ? 600 : 'normal'};
  ${({ uppercase }) => uppercase && 'text-transform: uppercase'};
  font-size: ${({ sizeValue }) => sizeValue ? sizeValue : 'inherit'}px;
  ${({ underline }) => underline && UnderlineStyles};
  ${({ unstyled }) => unstyled && Unstyled};
`;

const UnderlineStyles = `
  ::after {
    content:'';
    position: absolute; 
    left: 0; 
    bottom:-2px; 
    width: 100% ; 
    height: 1px; 
    background: ${colors.azure};
  }
`;

const Unstyled = `
`;
import React from 'react';
import styled, { css } from 'styled-components';
import { colors } from 'config';

export const Wrapper = styled.div`
  height: auto;
  width: auto;
  position: relative;
  ${({ withIcon }) => withIcon && css`padding-left: 60px;`};
`;

export const ContentTxt = styled(
  ({
     sizeValue,
     white,
     medium,
     uppercase,
     withIcon,
     slate,
     battleShipGrey,
     semiBold,
     darkBlueGrey,
     noMarginBottom,
     center,
     imgIcon,
     badgeIcon,
     right,
     ...restProps
   }) => <p {...restProps} />)`
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: -0.2px;
  
  text-align: ${props => props.center ? 'center' : props.right ? 'right' : 'inherit'};
  color: ${props => props.white ? colors.white : colors.black};
  font-weight: ${props => props.medium ? '500' : 'normal'};
  font-size: ${({ sizeValue }) => sizeValue ? (sizeValue - 2) : 14}px;
  
  ${({ uppercase }) => uppercase && 'text-transform: uppercase'};
  ${({ slate }) => slate && css`color: ${colors.slate};`};
  ${({ battleShipGrey }) => battleShipGrey && css`color: ${colors.battleShipGrey};`};
  ${({ semiBold }) => semiBold && css`font-weight: 600`};
  ${({ darkBlueGrey }) => darkBlueGrey && css`color: ${colors.darkBlueGrey};`};
  ${({ noMarginBottom }) => noMarginBottom && css`margin-bottom: 0;`};
  
   @media screen and (min-width: 992px) {
     font-size: ${({ sizeValue = 16 }) => sizeValue}px;
   }
`;
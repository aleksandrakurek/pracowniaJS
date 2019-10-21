import React from 'react';
import PropTypes from 'prop-types';
import * as P from './parts';
import BgItem from '../BgItem';

const Content = (props) => {
  const {
    children,
    white,
    medium,
    uppercase,
    sizeValue,
    center,
    right,
    withIcon,
    badgeIcon,
    imgIcon,
    slate,
    battleShipGrey,
    semiBold,
    darkBlueGrey,
    noMarginBottom,
    className,
    dangerouslySetInnerHTML
  } = props;

  return (
    <P.Wrapper withIcon={withIcon}>
      {withIcon &&
      <BgItem
        badgeIcon={badgeIcon}
        imgIcon={imgIcon}
      />}
      <P.ContentTxt
        white={white}
        medium={medium}
        uppercase={uppercase}
        sizeValue={sizeValue}
        center={center}
        right={right}
        withIcon={withIcon}
        badgeIcon={badgeIcon}
        imgIcon={imgIcon}
        slate={slate}
        battleShipGrey={battleShipGrey}
        semiBold={semiBold}
        darkBlueGrey={darkBlueGrey}
        noMarginBottom={noMarginBottom}
        className={className}
        dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      >
        {children}
      </P.ContentTxt>
    </P.Wrapper>
  );
};

Content.propTypes = {
  children: PropTypes.node,
  white: PropTypes.bool,
  medium: PropTypes.bool,
  uppercase: PropTypes.bool,
  sizeValue: PropTypes.string,
  center: PropTypes.bool,
  right: PropTypes.bool,
  withIcon: PropTypes.bool,
  badgeIcon: PropTypes.bool,
  imgIcon: PropTypes.bool,
  slate: PropTypes.bool,
  battleShipGrey: PropTypes.bool,
  semiBold: PropTypes.bool,
  darkBlueGrey: PropTypes.bool,
  noMarginBottom: PropTypes.bool,
};

export default Content;

import React from 'react';
import PropTypes from 'prop-types';
import * as P from './parts';

const Section = ({ children, id, iceBlue, veryLightBlue, className }) => (
  <P.SectionContainer id={id} iceBlue={iceBlue} veryLightBlue={veryLightBlue} className={className}>
    {children}
  </P.SectionContainer>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  iceBlue: PropTypes.bool,
  veryLightBlue: PropTypes.bool,
};

export default Section;
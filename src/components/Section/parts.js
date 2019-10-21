import React from 'react';
import styled, { css } from 'styled-components';
import { colors } from 'config';

export const SectionContainer = styled.section`
  padding: 50px 0;
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
  background: ${colors.white};
  
  ${({ iceBlue }) => iceBlue && css`background: ${colors.iceBlue}`};
  ${({ veryLightBlue }) => veryLightBlue && css`background: ${colors.veryLightBlue}`};
  
  @media screen and (min-width: 992px) {
    padding: 100px 0;
  }
`;
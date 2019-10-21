import styled, { css } from 'styled-components';

export const StyledBackground = styled.div`
  position: relative;
  display: inline-block;
  height: 100%;
  width: 100%;
  
  ${({ imageUrl }) => imageUrl && css`background-image: url(${imageUrl})`};
`;
import styled from "styled-components"
import { colors } from "config"

export const Wrapper = styled.div`
  width: auto;
  margin: 100px auto 30px auto;
  text-align: center;
  
  @media screen and (min-width: 992px) {
    padding-left: 60px;
    display: inline-flex;
    margin: 0;
    position: absolute;
  }
`

const activeStyles = `
  font-weight: 600; 
  color: ${colors.darkBlueGrey};
`

export const Item = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: ${colors.blueyGrey};
  display: inline-block;
  
  ${({ active }) => active && activeStyles};
`

export const Span = styled.span`
  padding: 0 5px;
`

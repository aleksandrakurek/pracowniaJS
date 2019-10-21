import styled from "styled-components"
import { colors, colorsRGBA } from "config"

const plusIconStyles = `
  text-align: left; 
  padding-right: 100px;
  
  @media screen and (min-width: 992px){
    padding-right: 60px;
  }
`

const iconArrowStyles = `
  text-align: left; 
  padding-right: 60px;
`

const disabledStyles = `
  background: ${colors.white};
  border: solid 2px ${colors.silver};
  color: ${colors.slate};
  font-weight: normal;
  
  :hover {
    background: ${colors.white};
    box-shadow: inset 0 2px 0 0 ${colorsRGBA.fadeWhite};
    cursor: auto;
  }
`

export const Btn = styled.button`
  font-family: BebasNeueRegular, sans-serif;
  border-radius: 4px;
  display: inline-block;
  margin: 5px 2px;
  padding:0 30px;
  position: relative;
  width: 100%;
  height: 60px;
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: 500;
  box-shadow: inset 0 2px 0 0 ${colorsRGBA.fadeWhite};
  text-align: center;
  transition: all 0.8s ease-in-out;
  background: ${props => props.white ? colors.white : props.yellow ? colors.yellow : colors.brightBlue};
  border: ${props => props.white ? `1px solid ${colors.white}` : props.yellow ? `1px solid ${colors.yellow}` : `1px solid ${colors.azure}`};
  color: ${props => props.white ? colors.azure : colors.white};
  ${({ iconPlus }) => iconPlus && plusIconStyles};
  ${({ iconArrow }) => iconArrow && iconArrowStyles};
  ${({ iconArrowBlue }) => iconArrowBlue && iconArrowStyles};
  
  :hover, :focus {
    background: ${props => props.white ? colors.paleGrey : props.yellow ? colors.yellow : colors.azure};
    box-shadow: 0 4px 8px 0 ${colorsRGBA.fadeGrey}, inset 0 2px 0 0 ${colorsRGBA.fadeWhite};
    transition: all 0.8s ease-in-out;
    cursor: pointer;
    outline: none;
  }
  
   ${({ disabled }) => disabled && disabledStyles};
   
  @media screen and (min-width: 992px){
    font-size: 20px;
    line-height: 60px;
    width: ${props => props.fullWidth ? "100%" : "auto"};
  }
`

export const Img = styled.img`
  opacity: ${({ iconPlus }) => Number(iconPlus)};
  text-align: right;
  height: 16px;
  width: 16px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 30px;
`
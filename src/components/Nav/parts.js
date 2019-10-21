import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { colors, shadows } from "config"
import Headroom from "react-headroom"
import { slide as Menu } from "react-burger-menu"

export const HeadroomStyled = styled(Headroom)`
  .headroom {
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000 !important;
    
    a {
      color: ${({ iceBlue, black }) => iceBlue || black ? colors.darkBlueGrey : colors.white};
    }
  }

  .headroom--unfixed {
    position: relative;
    transform: translateY(0);
    height: 100px;
  }
  
  .headroom--scrolled {
    transition: transform 200ms ease-in-out;
    top: 0;
    box-shadow: ${shadows.baseBoxShadow};
    height: 100px;
    background: ${colors.white};
    z-index: 1000 !important;
      
    a {
      display: block;
      color: ${colors.darkBlack};
    }
  }
  
  .headroom--unpinned {
    transform: translateY(100%);
    top: 0;
  }
  
  .headroom--pinned {
    position: fixed;
    transform: translateY(0);
  }
  
  .headroom--scrolled, .headroom--unpinned {
    transform: translate3d(0px, 100%, 0px) !important;
    top: -100px !important;
    transition: transform 200ms ease-in-out;
    
    box-shadow: ${shadows.baseBoxShadow};
    height: 100px;
    background: ${colors.white};
    z-index: 10;
   
    a {
      display: block;
      color: ${colors.darkBlack};
    }
  }
  
  .headroom--scrolled, .headroom--pinned {
    top: 0;
    transform: translateY(0%);
  }
`

export const Container = styled(({ iceBlue, ...restProps }) => <nav {...restProps} />)`
  background: ${({ iceBlue }) => iceBlue ? colors.veryLightBlue : "transparent"};
  width: 100%;
  height: 100%;
  display: inline-block;
  position: relative;
  top: 0;
  z-index: 100; 
`

export const Logo = styled(({ iceBlue, black, ...restProps }) => <div {...restProps} />)`
  float: left;
  color: ${({ iceBlue, black }) => iceBlue || black ? colors.darkBlueGrey : colors.white};
  padding: 20px;
`

const MobileListStyle = `
  list-style: none;
  float: none;
  
  :focus {
    outline : none;
  }
`

export const List = styled.ul`
  float: right;
  margin: 0;
  color: ${({ iceBlue, black }) => iceBlue || black ? colors.darkBlueGrey : colors.white};
 
  @media screen and (max-width: 992px) {
   ${MobileListStyle}
  }
`

const MobileListItemStyle = `
  display: list-item;
  padding-right: 40px;
  color: ${colors.white} !important;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 18px;
  cursor: pointer;
  position: relative;
  width: 100%;
  text-align: left;
  padding-bottom: 15px;
  
  a {
    color: ${colors.white} !important;
  }
  
  :hover {
    ::after {
      transition: background-color 0.3s ease-in-out;
    }
  }
  
  ::after {
    content:'';
    position: absolute;
    bottom: 5px;
    width: 100%;
    height: 2px;
    background: ${colors.white};
    left: 0;
  }
`

export const ListItem = styled(({ iceBlue, black, ...restProps }) => <li {...restProps} />)`
  display: inline-block;
  width: fit-content;
  padding: 40px 20px;
  color: ${({ iceBlue, black }) => iceBlue || black ? colors.darkBlueGrey : colors.white};
  position: relative;
  margin: 0;
  
  @media screen and (max-width: 992px) {
   ${MobileListItemStyle}
  } 
`

export const NavLink = styled(({ iceBlue, black, isActive, ...restProps }) => <Link {...restProps} />)`
  line-height: normal;
  color: ${({ iceBlue, black }) => iceBlue || black ? colors.darkBlueGrey : colors.darkBlack};
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1px;
  position: relative;
  font-family: 'BebasNeueRegular', sans-serif;
  
  &:focus, &:active, &:visited {
    color: inherit;
  }
  
  ::after {
    content: '';
    width: 0;
    position: absolute;
    bottom: -5px;
    left: 0;
    height: 4px;
    background: ${colors.azure};
    display: none;
  }
  
  &:hover {
    color: ${colors.brightBlue};
    transition: color .3s ease-in-out;
    
      ::after {
         width: 100%;
         transition: all .1s ease-in-out;
       }
  }
  
  &.active { 
    ::after {
      content: '';
      width: 100%
    }
  }
  
  
   @media screen and (min-width: 992px) {
   ::after {
     display: block;
    }
   }
`

export const FishialLogo = styled.img`
  height: 60px;
  position: absolute;
  z-index: 100;
  top: 24px;
  left: 10px;
 
  @media screen and (min-width: 992px) {
    position: static;
  }   
`

export const ExternalLink = styled(({ iceBlue, black, ...restProps }) => <a {...restProps} />)`
  font-size: 14px;
  line-height: normal;
  letter-spacing: -0.4px;
  color: ${({ iceBlue, black }) => iceBlue || black ? colors.darkBlueGrey : "white"};
  text-decoration: none;
  display: inline-block;
  
  &:focus, &:active, &:visited {
    color: inherit;
  }
  
  &:hover {
    color: ${colors.brightBlue};
    transition: color 0.3s ease-in-out;
  }
`

export const ImgWrapper = styled.div`
  display: inline-block;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
`

export const MenuBlackStyles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    right: "36px",
    top: "36px",
  },
  bmBurgerBars: {
    background: "#373a47",
    opacity: 1,
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    top: "0",
    width: "200px",
  },
  bmMenu: {
    background: "#1665d8",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#1665d8",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
}

export const MenuStyles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    right: "36px",
    top: "36px",
  },
  bmBurgerBars: {
    background: "#ffffff",
    opacity: 1,
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    top: "0",
    width: "200px",
  },
  bmMenu: {
    background: "#1665d8",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#1665d8",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
}

export const StyledMenu = styled(Menu)`
height: 100px;
`

export const MobileNav = styled(({ black, ...restProps }) => <div {...restProps} />)`
  height: ${({ black }) => black ? "80px" : 0}; 
`
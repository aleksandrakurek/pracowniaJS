import React, { Component } from "react"
import PropTypes from "prop-types"
import * as A from "assets/images"
import * as P from "./parts"
import { debounce } from "utils/debounce"

const data = [
  {
    to: "/",
    text: "HOME",
  },
  // {
  //   to: '/#section-upload',
  //   text: ' Upload Photos',
  // },
  // {
  //   to: '/#section-about',
  //   text: 'About us',
  // },
  // {
  //   to: '/#section-ranking',
  //   text: 'Ranking',
  // },
  // {
  //   to: '/#section-contributors',
  //   text: 'Contributors',
  // },
  {
    to: "/stories",
    text: "Stories",
  },
]

class Navigation extends Component {
  state = {
    isMobile: true,
    isLoggedIn: false,
    isSticky: false,
    loggedUser: {
      name: "",
      avatar: "",
    },
  }

  componentDidMount() {
    if (window.innerWidth > 992) {
      this.setState({
        isMobile: false,
      })
    }

    window.addEventListener("resize", debounce(this.handleResize, 250))
  }

  handleResize = () => {
    this.setState({
      isMobile: window.innerWidth < 992,
    })
  }

  handleStickyMenu = () => {
    this.setState({ isSticky: true })
  }

  handleUnPin = () => {
    this.setState({ isSticky: false })
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize)
  }

  render() {
    const { iceBlue, black } = this.props
    const { isMobile, isSticky } = this.state

    const dataArr = data.map(({ to, text }, i) => (
      <P.ListItem
        key={i}
        iceBlue={iceBlue}
        black={black}
      >
        <P.NavLink
          to={to}
          iceBlue={iceBlue}
          black={black}
          activeClassName={"active"}
        >
          {text}
        </P.NavLink>
      </P.ListItem>
    ))

    if (isMobile) {
      return (
        <P.MobileNav black={black}>
          <P.ExternalLink
            href="/">
            {black ? (<P.FishialLogo src={A.LogoMobile} alt="logo" />) :
              <P.FishialLogo src={A.LogoWhiteMobile} alt="logo" />
            }
          </P.ExternalLink>
          <P.StyledMenu noOverlay styles={black ? P.MenuBlackStyles : P.MenuStyles}>
            <P.List>
              {dataArr}
            </P.List>
          </P.StyledMenu>
        </P.MobileNav>
      )
    }


    return (
      <P.HeadroomStyled
        onPin={this.handleStickyMenu}
        onUnfix={this.handleUnPin}
        onUnpin={this.handleStickyMenu}
        iceBlue={iceBlue}
        black={black}

        upTolerance={0}
        downTolerance={0}
      >
        <
          P.Container
          iceBlue={iceBlue}
        >
          < P.Logo
            iceBlue={iceBlue}
            black={black}
          >
            < P.ExternalLink
              href="/">
              {isSticky || black ? (<P.FishialLogo src={A.Logo} alt="logo" />) :
                <P.FishialLogo src={A.LogoWhite} alt="logo" />
              }
            </P.ExternalLink>
          </P.Logo>
          <P.List>
            {dataArr}
          </P.List>
        </P.Container>
      </P.HeadroomStyled>
    )
  }
}

Navigation.propTypes = {
  iceBlue: PropTypes.bool,
  black: PropTypes.bool,
}

export default Navigation

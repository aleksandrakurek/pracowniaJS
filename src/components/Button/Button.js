import React from "react"
import PropTypes from "prop-types"
import * as P from "./parts"
import * as A from "assets/images"

const Button = ({ children, to, white, yellow, fullWidth, iconPlus, disabled, onClick, iconArrow, iconArrowBlue, className }) => {
  return (
    <P.Btn
      yellow={yellow}
      white={white}
      iconPlus={iconPlus}
      iconArrow={iconArrow}
      iconArrowBlue={iconArrowBlue}
      to={to}
      fullWidth={fullWidth}
      disabled={disabled}
      onClick={onClick}
      className={className}
    >
      {iconPlus && (
        <P.Img src={A.PlusIcon} alt="+" />
      )}
      {iconArrow && (
        <P.Img src={A.ArrowWhite} alt="arrow" />
      )}
      {iconArrowBlue && (
        <P.Img src={A.ArrowBlue} alt="arrow" />
      )}
      {children}
    </P.Btn>
  )
}

Button.defaultProps = {}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  white: PropTypes.bool,
  yellow: PropTypes.bool,
  fullWidth: PropTypes.bool,
  iconPlus: PropTypes.bool,
  iconArrow: PropTypes.bool,
  iconArrowBlue: PropTypes.bool,
  disabled: PropTypes.bool,
}

export default Button
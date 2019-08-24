import React from "react";
import PropTypes from "prop-types";

import "./button.css";

const Button = ({ children, action, className }) => {
  return(
    <button onClick={action} className={className}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  primary: false,
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  action: PropTypes.func,
  className: PropTypes.string,
}

export default Button;

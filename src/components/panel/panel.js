import React from 'react';
import PropTypes from 'prop-types';


import "./panel.css";
import {white} from "../../utils/colours";

const Panel = ({ children, width, background, classNames }) => {
  return(
    <div
      style={{
        width,
        background,
      }}
      className={"panel-common " + classNames}
    >
      {children}
    </div>
  );
}

Panel.defaultProps = {
  width: '100%',
  background: white,
}

Panel.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
  background: PropTypes.string,
  classNames: PropTypes.string
}

export default Panel;

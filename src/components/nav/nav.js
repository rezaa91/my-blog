import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import "./nav.css";

const Nav = ({ siteTitle, openLoginModal, hasScrolled }) => {
  return(
    <div className={hasScrolled ? "nav-scrolling nav-container" : "nav-container"}>
      <h2 className="nav-title">
        <Link to="/" className="nav-title-link">
          #{siteTitle}
        </Link>
      </h2>

      <div>
        <Link to="/blog/" className="link">blog</Link>
        <Link to="/courses/" className="link">courses</Link>
      </div>

      <div className="nav-right">
        <div onClick={openLoginModal} className="login-link">login</div>
      </div>
    </div>
  );
}

Nav.propTypes = {
  siteTitle: PropTypes.string.isRequired
}

export default Nav;

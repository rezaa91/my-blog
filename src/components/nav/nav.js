import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { connect } from "react-redux";

import "./nav.css";
import { removeUser } from "../../actions/userAction";
import { fadeIn } from "../../utils/animations";

const Nav = ({ siteTitle, openLoginModal, hasScrolled, user, removeUser }) => {
  return(
    <div className={hasScrolled ? "nav-scrolling nav-container" : "nav-container"}>
      <h2 className="nav-title">
        <Link to="/" className="nav-title-link" style={fadeIn}>
          #{siteTitle}
        </Link>
      </h2>

      <div>
        <Link to="/blog/" className="link">blog</Link>
        <Link to="/courses/" className="link">courses</Link>
      </div>

      <div className="nav-right">
        {
          user.email ?
            <div onClick={removeUser} className="login-link">Logout</div> :
            <div onClick={openLoginModal} className="login-link">login</div>
        }
      </div>
    </div>
  );
}

Nav.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  openLoginModal: PropTypes.func.isRequired,
  hasScrolled: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  removeUser: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  user: state.user.user,
})

export default connect(mapStateToProps, { removeUser })(Nav);

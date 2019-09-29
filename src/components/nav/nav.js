import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Link } from "gatsby";
import { connect } from "react-redux";
import { FaUserAlt } from "react-icons/fa";

import "./nav.css";
import { removeUser, getUser } from "../../actions/userAction";
import { fadeIn } from "../../utils/animations";

let hasCalledGetUser = false;

const Nav = ({ siteTitle, openLoginModal, hasScrolled, user, removeUser, getUser }) => {
  const [showDropdown, setShowDropdown] = React.useState(false);

  if (!hasCalledGetUser) {
    getUser();

    hasCalledGetUser = true;
  }

  React.useEffect(() => {
    document.addEventListener("mousedown", hideDropdown);

    return () => {
      document.removeEventListener("mousedown", hideDropdown);
    }
  }, []);

  const hideDropdown = (e) => {
    if (!e.target.classList.contains("dropdown")) {
      setShowDropdown(false);
    }
  }

  const logoutAction = () => {
    axios.post("/api/user/logout")
      .then(() => {
        removeUser();

        setShowDropdown(false);
      });
  }

  const linkClasses = (pageTitle) => {
    const defaultClasses = ['link'];

    const regex = new RegExp(pageTitle);

    if (typeof window !== 'undefined' && regex.test(window.location.href)) {
      defaultClasses.push('active-link');
    }

    return defaultClasses.join(' ');
  }

  const displayDropdown = () => {
    if (!showDropdown) {
      return;
    }

    return (
      <div className="dropdown dropdown-list">
        <div className="main-user-links">
          <Link className="dropdown dropdown-link" onClick={() => setShowDropdown(false)} to="/account/">Account</Link>
        </div>

        <div className="logout-container">
          <div className="dropdown logout" onClick={logoutAction}>Logout</div>
        </div>
      </div>
    );
  }

  return(
    <div className={hasScrolled ? "nav-scrolling nav-container" : "nav-container"}>
      <h2 className="nav-title">
        <Link to="/" className="nav-title-link" style={fadeIn}>
          #{siteTitle}
        </Link>
      </h2>

      <div>
        <Link to="/blog/" className={linkClasses('blog')}>blog</Link>
        <Link to="/courses/" className={linkClasses('courses')}>courses</Link>
      </div>

      <div className="nav-right">
        {
          user.email ?
            <div onClick={() => setShowDropdown(true)} className="login-link"><FaUserAlt /></div> :
            <div onClick={openLoginModal} className="login-link">login</div>
        }

        {displayDropdown()}
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
  getUser: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  user: state.user.user,
})

export default connect(mapStateToProps, { removeUser, getUser })(Nav);

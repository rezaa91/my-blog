import React from "react";
import PropTypes from "prop-types";
import { map } from "lodash";
import { connect } from "react-redux";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import "./styles/index.css";
import SEO from "../components/seo";
import Button from "../components/button/button";
import RegisterForm from "../components/form/registerForm";
import { bounceIn, fadeInUp } from "../utils/animations";
import twitter from "../images/svg/twitter.svg";
import instagram from "../images/svg/instagram.svg";
import youtube from "../images/svg/youtube.svg";
import { featuredCourses } from "../data/featuredCourses";
import { tiffany } from "../utils/colours";

const IndexPage = ({ isLoggedIn }) => {
  const renderFeaturedCourses = () => (
    map(featuredCourses, (course, index) => (
      <AniLink
        paintDrip
        hex={tiffany}
        key={index}
        to={course.path}
        className="featured-course"
      >
        <img src={course.image} alt={course.title} />
      </AniLink>
    ))
  )

  return (
    <>
      <SEO title="Home" />
      <header className="index-header">
        <div>
          <h1 style={bounceIn}>Get Busy Coding</h1>
          <h1 style={bounceIn}>Or Get Busy Learning</h1>
          <div className="index-action-buttons" style={fadeInUp}>
            <AniLink swipe to="/courses/"><Button primary={true} className="big primary">Courses</Button></AniLink>
            <AniLink swipe to="/blog/"><Button primary={true} className="big">Blog</Button></AniLink>
          </div>
        </div>
      </header>

      {
        // only display register form for users who are not logged in
        !isLoggedIn &&

        <section className="register-section">
          <div
            style={{
              flex: 1,
            }}
          >
            <h2>why join?</h2>
            <div style={{
              display: "flex",
            }}>
              <div className="register-info">
                <div className="register-bullet"><span>1</span>current, clean &amp; concise tutorials</div>
                <div className="register-bullet"><span>2</span>real world examples</div>
                <div className="register-bullet"><span>3</span>access to free content</div>
              </div>
            </div>
          </div>
          <RegisterForm />
        </section>
      }

      <section className="index-about-section">
        <div className="index-about-content">
          <h2>hi, my name is...</h2>
          <p className="sub-header"><strong>Ali Issaee</strong>,</p>
          <p className="big-text">I create blogs and courses tailored around web develpoment.</p>
          <p>
            <span className="follow-me">Follow me:</span>
            <a href="https://twitter.com/_rezaa91" className="social-media-icon" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="twitter" />
            </a>
            <a href="https://www.instagram.com/_rezaa91/" className="social-media-icon" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="instagram" />
            </a>
            <a href="https://www.youtube.com/channel/UCGPpiPgghR8uiaIIJuvKZtg" className="social-media-icon" target="_blank" rel="noopener noreferrer">
              <img src={youtube} alt="youtube" />
            </a>
          </p>
        </div>
      </section>

      <section className="index-featured-section">
        <h2>featured courses</h2>
        <div className="index-featured-container">
          {renderFeaturedCourses()}
        </div>
      </section>
    </>
  );
}

IndexPage.defaultProps = {
  isLoggedIn: false,
}

IndexPage.propTypes = {
  isLoggedIn: PropTypes.bool,
}

const mapStateToProps = state => ({
  isLoggedIn: Boolean(state.user && state.user.user && state.user.user.email),
})

export default connect(mapStateToProps)(IndexPage);

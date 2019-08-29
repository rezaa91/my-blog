import React from "react";
import { Link } from "gatsby";
import { map } from "lodash";

import "./styles/index.css";
import code from "../images/code.jpeg"
import Layout from "../components/layout";
import SEO from "../components/seo";
import Button from "../components/button/button";
import RegisterForm from "../components/form/registerForm";
import { bounceIn, fadeInUp } from "../utils/animations";
import twitter from "../images/svg/twitter.svg";
import instagram from "../images/svg/instagram.svg";
import youtube from "../images/svg/youtube.svg";


const featuredCourses = [
  {
    title: "HTML & CSS: The Complete Guide",
    image: code,
    path: "/courses/html-and-css-the-complete-guide",
  }
]

const IndexPage = () => {
  const renderFeaturedCourses = () => (
    map(featuredCourses, (course, index) => (
      <Link
        key={index}
        to={course.path}
        className="featured-course"
      >
        <img src={course.image} alt={course.title} />
      </Link>
    ))
  )

  return (
    <Layout>
      <SEO title="Home" />
      <header className="index-header">
        <div>
          <h1 style={bounceIn}>Get Busy Coding</h1>
          <h1 style={bounceIn}>Or Get Busy Learning</h1>
          <div className="index-action-buttons" style={fadeInUp}>
            <Link to="/courses/"><Button primary={true} className="big primary">Courses</Button></Link>
            <Link to="/blog/"><Button primary={true} className="big">Blog</Button></Link>
          </div>
        </div>
      </header>

      {/* <section
        style={{
          display: "flex",
          width: "100%",
          padding: "40px 20px",
        }}
      >
        <div
          style={{
            flex: 1,
          }}
        >
          <h2>get access to free content when you register</h2>
          <div style={{
            display: "flex",
          }}> */}
            {/* display 3 images here */}
          {/* </div>
        </div>
        <RegisterForm />
      </section> */}

      <section className="index-about-section">
        <div className="index-about-content">
          <h2>Hi, My Name Is...</h2>
          <p className="sub-header"><strong>Ali Issaee</strong>,</p>
          <p className="big-text">I create blogs and courses tailored around web develpoment.</p>
          <p>
            <span className="follow-me">Follow me:</span>
            <a href="https://twitter.com/_rezaa91" className="social-media-icon" alt="twitter" target="_blank">
              <img src={twitter} />
            </a>
            <a href="https://www.instagram.com/_rezaa91/" className="social-media-icon" alt="instagram" target="_blank">
              <img src={instagram} />
            </a>
            <a href="https://www.youtube.com/channel/UCGPpiPgghR8uiaIIJuvKZtg" className="social-media-icon" alt="youtube" target="_blank">
              <img src={youtube} />
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
    </Layout>
  );
}

export default IndexPage

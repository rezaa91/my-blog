import React from "react";
import { Link } from "gatsby";
import { map } from "lodash";

import "./styles/index.css";
import code from "../images/code.jpeg"
import Layout from "../components/layout";
import SEO from "../components/seo";
import Button from "../components/button/button";
import RegisterForm from "../components/form/registerForm";

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
        <img src={course.image} />
      </Link>
    ))
  )

  return (
    <Layout>
      <SEO title="Home" />
      <header className="index-header">
        <div>
          <h1>
            web development. the parts they don't teach you.
          </h1>
          <div className="index-action-buttons">
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
          <p className="sub-header">self taught web developer.</p>
          <p className="big-text">I create blogs and courses tailored around web develpoment. Predominantly using JavaScript and PHP.</p>
          <p>
            <span>Follow me:</span>
            {/* Social media links - insta, YT, twitter */}
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

import React from "react";
import { Link } from "gatsby";
import { map } from "lodash";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Button from "../components/button/button";
import RegisterForm from "../components/form/registerForm";
import Panel from "../components/panel/panel";
import { grey, tiffany } from "../utils/colours";
import code from "../images/code.jpeg"

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
      <Panel
        key={index}
        background={`url(${course.image})`}
        classNames="featured-course row-3"
      >
        <Link
          style={{
            width: "100%", height: "100%",
          }}
          to={course.path} />
      </Panel>
    ))
  )

  return (
    <Layout>
      <SEO title="Home" />
      <header
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div>
          <h1
            style={{
              color: tiffany,
              padding: '20px'
            }}
          >
            web development. the parts they don't teach you.
          </h1>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
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

      <section
        style={{
          padding: "40px 20px",
          background: grey,
        }}
      >
        <div
          style={{
            width: "40%",
            margin: "auto",
          }}
        >
          <p className="sub-header">self taught web developer.</p>
          <p className="big-text">I create blogs and courses tailored around web develpoment. Predominantly using JavaScript and PHP.</p>
          <p>
            <span>Follow me:</span>
            {/* Social media links - insta, YT, twitter */}
          </p>
        </div>
      </section>

      <section
        style={{
          padding: "40px 20px",
        }}
      >
        <h2>featured courses</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {renderFeaturedCourses()}
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage

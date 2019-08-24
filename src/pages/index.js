import React from "react";
import { Link } from "gatsby";
import { map } from "lodash";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Button from "../components/button/button";
import RegisterForm from "../components/form/registerForm";
import Panel from "../components/panel/panel";
import { tiffany } from "../utils/colours";

const featuredCourses = [
  {
    title: "Course 1",
    image: "",
  },
  {
    title: "Course 2",
    image: "",
  },
  {
    title: "Course 3",
    image: "",
  },
  {
    title: "Course 4",
    image: "",
  },
  {
    title: "Course 5",
    image: "",
  },
  {
    title: "Course 6",
    image: "",
  }
]

const IndexPage = () => {
  const renderFeaturedCourses = () => (
    map(featuredCourses, (course, index) => (
      <Panel key={index} classNames="featured-course row-3">
        <h4>{course.title}</h4>
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

      <section
        style={{
          display: "flex",
          width: "100%",
          padding: "10px 20px",
        }}
      >
        <div
          style={{
            flex: 1,
          }}
        >
          <h3>get access to free content when you register</h3>
          <div style={{
            display: "flex",
          }}>
            {/* display 3 images here */}
          </div>
        </div>
        <RegisterForm />
      </section>

      <section
        style={{
          padding: "10px 20px"
        }}
      >
        <h3>who are we?</h3>
        <p>
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis efficitur dictum.
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis efficitur dictum.
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis efficitur dictum.
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis efficitur dictum.
        </p>
      </section>

      <section
        style={{
          padding: "10px 20px",
        }}
      >
        <h3>featured courses</h3>
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

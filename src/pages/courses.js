import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { map } from "lodash";

import Layout from "../components/layout";
import SEO from "../components/seo";
import TutorialPanel from "../components/tutorial/tutorialPanel";

const Courses = () => {
  const data = useStaticQuery(graphql`
    {
      allTutorialsJson {
        edges {
          node {
            title
            link
            description
            image {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }

      }
    }
  `)

  const renderTutorials = () => (
    map(data.allTutorialsJson.edges, (tutorial, index) => (
      <TutorialPanel
        key={index}
        title={tutorial.node.title}
        path={tutorial.node.link}
        description={tutorial.node.description}
        fluid={tutorial.node.image.childImageSharp.fluid}
      />
    ))
  )

  return(
    <Layout>
      <SEO title="courses" />
      <section
        style={{
          padding: "100px 20px 20px",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {renderTutorials()}
      </section>
    </Layout>
  );
}

export default Courses;

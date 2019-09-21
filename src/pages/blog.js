import React from "react";
import { map } from "lodash";
import { graphql, useStaticQuery } from "gatsby";

import SEO from "../components/seo";
import BlogPanel from "../components/blog/blogPanel";

const Blog = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              path,
              title,
              date,
              summary,
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
    }
  `);

  const renderBlogPosts = () => (
    map(data.allMarkdownRemark.edges, (post, index) => (
      <BlogPanel
        key={index}
        fluid={post.node.frontmatter.image.childImageSharp.fluid}
        title={post.node.frontmatter.title}
        summary={post.node.frontmatter.summary}
        date={post.node.frontmatter.date}
        path={post.node.frontmatter.path}
      />
    ))
  )

  return(
    <>
      <SEO title="blog" />
        <section
          style={{
            display: "flex",
            padding: "100px 20px 20px",
            flexWrap: "wrap",
          }}
        >
          {renderBlogPosts()}
        </section>
    </>
  );
}

export default Blog;

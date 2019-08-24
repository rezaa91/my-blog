import React from "react";
import { map } from "lodash";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
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
              author,
              summary
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
        title={post.node.frontmatter.title}
        author={post.node.frontmatter.author}
        summary={post.node.frontmatter.summary}
        date={post.node.frontmatter.date}
        path={post.node.frontmatter.path}
      />
    ))
  )

  return(
    <Layout>
      <SEO title="blog" />
        <section
          style={{
            display: "flex",
            padding: "100px 20px 20px",
          }}
        >
          {renderBlogPosts()}
        </section>
    </Layout>
  );
}

export default Blog;

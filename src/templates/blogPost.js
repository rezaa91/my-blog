import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import "./blogPost.css";
import Layout from "../components/layout";

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <section className="blog-post-container">
        <h1 className="blog-post-title">{post.frontmatter.title}</h1>
        <div className="blog-post-meta-data">
          <p>{post.frontmatter.date}</p>
        </div>
        <Img className="blog-post-image" fluid={post.frontmatter.image.childImageSharp.fluid} />
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </section>
    </Layout>
  );
}

export const data = graphql`
query BlogPostByPath($path: String!) {
  markdownRemark(frontmatter: {path: {eq: $path}}) {
    html
    frontmatter {
      path
      title
      date
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
`;

export default BlogPost;

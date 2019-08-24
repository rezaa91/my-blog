import React from "react";
import { graphql } from "gatsby";

import "./blogPost.css";
import Layout from "../components/layout";

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <section className="blog-post-container">
        <h1 className="blog-post-title">{post.frontmatter.title}</h1>
        <div className="blog-post-meta-data">
          <p className="blog-post-author">{post.frontmatter.author}</p>
          <p>{post.frontmatter.date}</p>
        </div>
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
      author
      date
    }
  }
}
`;

export default BlogPost;

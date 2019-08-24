import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import "./blogPanel.css";

const BlogPanel = ({ title, summary, author, date, path }) => {
  return (
    <Link className="blog-panel" to={path}>
      <h3 className="blog-title">{title}</h3>
      <p className="blog-summary">{summary}</p>

      <div className="blog-footer">
        <div>
          {/* image here */}
        </div>
        <div className="meta-data">
          <p className="small author">{author}</p>
          <p className="small">{date}</p>
        </div>
      </div>
    </Link>
  );
}

BlogPanel.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}

export default BlogPanel;

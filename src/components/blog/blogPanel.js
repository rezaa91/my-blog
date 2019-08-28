import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Img from "gatsby-image";

import "./blogPanel.css";

const BlogPanel = ({ title, summary, date, path, fluid }) => {
  return (
    <div className="blog-panel">
      <Link className="blog-panel-image-container" to={path}>
        <Img className="blog-panel-image" fluid={fluid} />
      </Link>

      <div className="blog-info">
        <Link to={path}><h2 className="blog-title">{title}</h2></Link>
        <p className="blog-summary">{summary}</p>

        <div className="blog-footer">
          <div className="meta-data">
            <p className="small">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

BlogPanel.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}

export default BlogPanel;

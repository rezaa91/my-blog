import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import { Link } from "gatsby";

import "./tutorialPanel.css";
import { bounceIn } from "../../utils/animations";

const TutorialPanel = ({ title, path, description, fluid }) => {
  return(
    <Link to={path} className="tutorial-panel-container" style={bounceIn}>
      <div className="tutorial-panel-image">
        <Img fluid={fluid} />
      </div>
      <div className="tutorial-panel-meta-data">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}

TutorialPanel.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  fluid: PropTypes.object.isRequired
}

export default TutorialPanel;

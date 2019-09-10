import React from "react";
import { graphql } from "gatsby";

import "./tutorial.css"
import VideoScroller from "../components/tutorial/videoScroller";
import { fadeInUp, slideIn } from "../utils/animations";

const Tutorial = ({ data }) => {
  const tutorial = data.tutorialsJson;

  const [videoPlaying, setVideoPlaying] = React.useState(tutorial.videos[0]);

  return(
    <section className="tutorial-container">
      <div className="tutorial-left-container">
        <div className="video-player-container" style={slideIn}>
          <iframe
            className="video-player"
            title={videoPlaying.title}
            src={`${videoPlaying.yt_link}?autoplay=1`}
            allow="accelerometer; autoplay; gyroscope"
            frameBorder="0"
            allowFullScreen
          />
        </div>
        <h1 className="video-title">{videoPlaying.title}</h1>
        <h3 className="video-description">{videoPlaying.description}</h3>
      </div>

      <div className="tutorial-right-container" style={fadeInUp}>
        <VideoScroller videos={tutorial.videos} selectVideo={setVideoPlaying} />
      </div>
    </section>
  );
}

export const query = graphql`
  query TutorialByPath($path: String!) {
    tutorialsJson(link: {eq: $path}) {
      videos {
        title
        yt_link
        description
        active
      }
    }
  }
`

export default Tutorial;

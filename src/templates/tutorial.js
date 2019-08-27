import React from "react";
import { graphql } from "gatsby";

import "./tutorial.css"
import Layout from "../components/layout";
import VideoScroller from "../components/tutorial/videoScroller";

const Tutorial = ({ data }) => {
  const tutorial = data.tutorialsJson;

  const [videoPlaying, setVideoPlaying] = React.useState(tutorial.videos[0]);

  return(
    <Layout>
      <section className="tutorial-container">
        <div className="tutorial-left-container">
          <div className="video-player-container">
            <iframe title="video" width="1280" height="720" src={`${videoPlaying.yt_link}?autoplay=1`}></iframe>
          </div>
          <h1 className="video-title">{videoPlaying.title}</h1>
          <h3 className="video-description">{videoPlaying.description}</h3>
        </div>

        <div className="tutorial-right-container">
          <VideoScroller videos={tutorial.videos} selectVideo={setVideoPlaying} />
        </div>
      </section>
    </Layout>
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

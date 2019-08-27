import React from "react";
import PropTypes from "prop-types";
import { map } from "lodash";

import "./videoScroller.css";
import { grey, black } from "../../utils/colours";

const VideoScroller = ({ videos, selectVideo }) => {
  const removeActiveFlag = () => {
    map(videos, video => video.active = false);
  }

  const onClickList = (video) => {
    removeActiveFlag();
    video.active = true;
    selectVideo(video);
  }

  const renderVideoList = () => (
    map(videos, (video, index) => (
      <h3
        key={index}
        className="video-scroller-list-item"
        onClick={() => onClickList(video)}
        style={{color: video.active ? black : grey}}
      >
        {video.title}
      </h3>
    ))
  );

  return(
    <div className="video-scroller-list">
      {renderVideoList()}
    </div>
  );
}

VideoScroller.propTypes = {
  videos: PropTypes.array.isRequired,
  selectVideo: PropTypes.func.isRequired,
};

export default VideoScroller;

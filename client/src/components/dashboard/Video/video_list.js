import React from "react";
import VideoListItem from "./video_list_item";

const VideoList = props => {
  const videoItems = props.videos.map((video, i) => {
    if (i >= 4) {
      return;
    }
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });

  return <ul className="list-group">{videoItems}</ul>;
};

export default VideoList;

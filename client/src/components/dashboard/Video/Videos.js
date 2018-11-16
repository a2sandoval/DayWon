import React, { Component } from "react";
import YTSearch from "youtube-api-search";
import VideoList from "./video_list";
import VideoDetail from "./video_detail";
const API_KEY = "AIzaSyBtI-HUEXNB981k31rA6b6a2dP-JuA59Q8";

class Videos extends Component {
  state = {
    videos: [],
    selectedVideo: null,
    active: "Bench"
  };

  videoSearch = (term, lift) => {
    YTSearch({ key: API_KEY, term: term }, videos => {
      console.log(videos);
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  };

  componentDidMount() {
    this.videoSearch("Benchpress How to Juggernaut Training", "Bench");
  }

  isActive = lift => {
    this.state.active === lift ? "active-button" : "inactive-button";
  };

  render() {
    return (
      <div className="videos">
        <div className="choose-type">
          <button
            className={this.isActive("Bench")}
            onClick={() =>
              this.videoSearch("Benchpress How to Juggernaut Training", "Bench")
            }
          >
            Benchpress
          </button>
          <button
            className={this.isActive("Squat")}
            onClick={() =>
              this.videoSearch("Squat How to Juggernaut Training", "Squat")
            }
          >
            Squat
          </button>
          <button
            className={this.isActive("Deadlift")}
            onClick={() =>
              this.videoSearch(
                "Deadlift How to Juggernaut Training",
                "Deadlift"
              )
            }
          >
            Deadlift
          </button>
          <button
            className={this.isActive("Military Press")}
            onClick={() =>
              this.videoSearch(
                "Military Press How to Juggernaut Training",
                "Military Press"
              )
            }
          >
            Military Press
          </button>
        </div>
        <div className="video-player">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
            videos={this.state.videos}
          />
        </div>
      </div>
    );
  }
}

export default Videos;

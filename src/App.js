import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { SearchBar, VideoDetail, VideoList } from "./components";
import youtube from "./api/youtube";

const APP_KEY = "AIzaSyDRG1stR3FzhBKWtWplNF_PwA7Lz8EuZSw";

class App extends Component {
  state = {
    videos: [],
    video: null
  };
  componentDidMount() {
    this.handleSubmit("pdf generation with react and node");
  }
  handleSubmit = async value => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: APP_KEY,
        q: value
      }
    });
    this.setState({
      videos: response.data.items,
      video: response.data.items[0]
    });
  };
  onSelectVideo = video => {
    this.setState({
      video
    });
  };
  render() {
    const { videos, video } = this.state;
    return (
      <Grid justify="flex-start" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={video} />
            </Grid>
            <Grid item xs={4}>
              <VideoList videos={videos} onSelectVideo={this.onSelectVideo} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;

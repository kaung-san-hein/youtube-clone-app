import React from "react";
import VideoItem from "./VideoItem";
import { Grid } from "@material-ui/core";

const VideoList = ({ videos, onSelectVideo }) => {
  const listOfVideos = videos.map((video, id) => (
    <VideoItem onSelectVideo={onSelectVideo} key={id} video={video} />
  ));
  return (
    <Grid container spacing={10}>
      {listOfVideos}
    </Grid>
  );
};

export default VideoList;

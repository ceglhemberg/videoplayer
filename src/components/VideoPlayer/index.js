import React, { Fragment, useState } from 'react';

import VideoViewer from './VideoViewer';
import VideoPosters from './VideoPosters';

const VideoPlayer = ({ data }) => {

  // State
  const [currentVideo, setCurrentVideo] = useState({
    id: data[0].id,
    video: data[0].video
  });

  // Select video
  const selectVideo = (id, video) => {
    if (currentVideo.id !== id) {
      setCurrentVideo({ id, video });
    }
  };

  // Video viewer
  let videoViewer;
  if (currentVideo) {
    videoViewer = (
      <VideoViewer
        id={currentVideo.id}
        video={currentVideo.video} 
      />
    );
  }

  return (
    <Fragment>
      {videoViewer}
      <VideoPosters 
        posters={data}
        select={selectVideo}
      />
    </Fragment>
  );
}

export default VideoPlayer;
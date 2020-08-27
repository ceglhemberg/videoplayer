import React from 'react';
import './style.css';

const VideoViewer = ({ id, video }) => {
  return (
    <video
      key={id}
      className='video-viewer' 
      controls
      autoPlay
    >
      <source src={video} type='video/mp4' />
      Your browser does not support the video tag.
    </video>
  );
}

export default VideoViewer;
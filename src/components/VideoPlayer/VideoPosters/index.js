import React from 'react';
import './style.css';

import VideoPoster from './VideoPoster';

const VideoPosters = ({ posters, select }) => {
  return (
    <div className='video-posters'>
      {posters.map(poster => (
        <VideoPoster
          key={poster.id}
          poster={poster}
          select={select}
        />
      ))}
    </div>
  );
}

export default VideoPosters;
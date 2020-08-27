import React from 'react';
import './style.css';

import VideoPoster from './VideoPoster';
import useMousePosition from '../../../hooks/useMousePosition';

const VideoPosters = ({ posters, select }) => {

  // Hooks
  const mousePosition = useMousePosition();

  return (
    <div className='video-posters'>
      {posters.map(poster => (
        <VideoPoster
          key={poster.id}
          poster={poster}
          select={select}
          mousePosition={mousePosition}
        />
      ))}
    </div>
  );
}

export default VideoPosters;
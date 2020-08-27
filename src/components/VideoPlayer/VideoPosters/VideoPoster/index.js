import React from 'react';
import './style.css';

const VideoPoster = ({ poster, select }) => {

  // Select video
  const selectVideo = () => select(poster.id, poster.video);

  return (
    <div className='video-poster' onClick={selectVideo}>
      <img 
        className='video-poster__image' 
        src={poster.image} 
        alt={poster.name} 
      />
      <h4 className='video-poster__name'>
        {poster.name}
      </h4>
    </div>
  );
}

export default VideoPoster;
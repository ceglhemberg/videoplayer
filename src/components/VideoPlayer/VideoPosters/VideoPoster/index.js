import React, { useState } from 'react';
import './style.css';

const VideoPoster = ({ poster, select, mousePosition }) => {

  // State
  const [showInfo, setShowInfo] = useState(false);

  // Select video
  const selectVideo = () => select(poster.id, poster.video);

  // Show info
  const show = () => setShowInfo(true);
  const hide = () => setShowInfo(false);

  // Description
  let description;
  if (showInfo) {
    description = (
      <div
        className='video-poster__popup'
        style={{
          transform: `translate3d(${mousePosition.x}px,${mousePosition.y}px, 0px)`
        }}
      >
        <p className='video-poster__description'>
          {poster.description}
        </p>
      </div>
    );
  }

  return (
    <div
      className='video-poster' 
      onClick={selectVideo}
      onMouseEnter={show}
      onMouseLeave={hide}
    >
      <img 
        className='video-poster__image' 
        src={poster.image} 
        alt={poster.name} 
      />
      <h4 className='video-poster__name'>
        {poster.name}
      </h4>
      {description}
    </div>
  );
}

export default VideoPoster;
import React, { useState } from 'react';
import './style.css';

import VideoPosterPopup from './VideoPosterPopup';

const VideoPoster = ({ poster, select }) => {

  // State
  const [showInfo, setShowInfo] = useState(false);

  // Select video
  const selectVideo = () => select(poster.id, poster.video);

  // Show info
  const show = () => setShowInfo(true);
  const hide = () => setShowInfo(false);

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
      {showInfo && <VideoPosterPopup text={poster.description} />}
    </div>
  );
}

export default VideoPoster;
import React, { useEffect, useLayoutEffect, useState, useRef } from 'react';
import './style.css';

// Mouse hook
const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const setFromEvent = e => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', setFromEvent);

    return () => {
      window.removeEventListener('mousemove', setFromEvent);
    };
  }, []);

  return position;
};

const VideoPosterPopup = ({ text }) => {

  // Hooks
  const { x, y } = useMousePosition();

  // State
  const [coordinates, setCoordinates] = useState({
    x: x,
    y: y
  });

  // Refs
  const posterRef = useRef(null);

  useLayoutEffect(() => {
    // Handle x coordinate
    let width = x;
    if (window.innerWidth <= 500) {
      width = 0;
    } else if (window.innerWidth <= 1000) {
      width = window.innerWidth / 2 - posterRef.current.clientWidth / 2;
    } else if (x + posterRef.current.clientWidth >= window.innerWidth) {
      width = x - posterRef.current.clientWidth;
    }

    // Handle y coordinate
    let height = y;
    if (y + posterRef.current.clientHeight >= window.innerHeight) {
      height = y - posterRef.current.clientHeight;
    }

    setCoordinates({
      x: width,
      y: height + window.pageYOffset
    });

  }, [x, y]);

  // Popup class
  let popupClass = 'video-poster-popup';
  if (!coordinates.x && !coordinates.y) {
    popupClass += 'video-poster-popup--hidden'
  }

  return (
    <div
      className={popupClass}
      ref={posterRef}
      style={{
        transform: `translate3d(${coordinates.x}px,${coordinates.y}px, 0px)`
      }}
    >
      <p className='video-poster-popup__description'>
        {text}
      </p>
    </div>
  );
}

export default VideoPosterPopup;
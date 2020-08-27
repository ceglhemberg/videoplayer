import React from 'react';
import './style.css';

import loader from '../../../assets/images/loader.svg';

const Loading = () => {
  return (
    <div className='loading'>
      <img 
        className='loading__loader' 
        src={loader}
        alt='loading'
      />
    </div>
  );
}

export default Loading;
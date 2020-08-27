import React from 'react';
import './style.css';

const Error = ({ title, text, highlight }) => {

  // Error class
  let errorClass = 'error';
  if (highlight) {
    errorClass += ' error__highlight';
  }

  return (
    <div className={errorClass}>
      <h3 className='error__title'>
        {title}
      </h3>
      <p className='error__text'>
        {text}
      </p>
    </div>
  );
}

export default Error;
"use strict";

import React from 'react';

const Alert = ({message, alertMessage}) => {
  if(!message) return null;
  if(message == 'loading') message = <img src="/images/loading.png" />;
  else message = <span className='center cell'>{message}</span>;

  setTimeout(() => {
    alertMessage('');
  }, 3000);

  return (
    <div className="message-wrapper">
      {message}
    </div>
  );
};

export default Alert;

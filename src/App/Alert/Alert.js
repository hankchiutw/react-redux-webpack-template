import React from 'react';

const Alert = ({ message, alertMessage }) => {
  if (!message) return null;

  message = ('loading' === message) ?
    <img src="/images/loading.png" /> :
    <span className="center cell">{message}</span>;

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

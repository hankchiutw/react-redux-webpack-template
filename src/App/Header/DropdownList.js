import React from 'react';
import { Link } from 'react-router-dom';

const DropdownList = ({ isOn, alertMessage, alertLoading }) => {
  /**
   * Listen to props and change style
   */
  const _domRef = (list) => {
    if (!list) return;

    if (isOn)list.classList.add('on');
    else list.classList.remove('on');
  };

  return (
    <ul className="dropdown-menu dropdown-menu-right " ref={_domRef}>
      <li>
        <Link to="/" className="user-menu-anchor">Home</Link>
      </li>
      <li>
        <a className="user-menu-anchor" onClick={() => alertMessage('hi!')}>Say hi!</a>
      </li>
    </ul>
  );
};

export default DropdownList;

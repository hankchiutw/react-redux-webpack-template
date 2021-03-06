import React from 'react';

import DropdownList from './_redux/DropdownListContainer';

const Usermenu = ({ username, toggleUsermenu }) => {
  return (
    <div className="dropdown pull-right cell user-menu-cell" onClick={toggleUsermenu}>
      <button className="btn dropdown-toggle" type="button">
        <span>{username}</span>
        <span className="caret" />
        <DropdownList />
      </button>
    </div>
  );
};

export default Usermenu;

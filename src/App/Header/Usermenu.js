"use strict";

import React from 'react';

import DropdownList from './DropdownList';

const Usermenu = ({username, toggleUsermenu, isUsermenuOn}) => {
    return (
        <div className="dropdown pull-right cell user-menu-cell" onClick={toggleUsermenu}>
            <button className="btn dropdown-toggle" type="button">
                <span>{username}</span>
                <span className="caret"></span>
                <DropdownList isOn={isUsermenuOn} />
            </button>
        </div>
    );

};

export default Usermenu;

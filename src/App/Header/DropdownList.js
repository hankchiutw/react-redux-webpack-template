"use strict";

import React from 'react';
import { Link } from 'react-router';

const DropdownList = ({isOn}) => {
    return (
        <ul className="dropdown-menu dropdown-menu-right " ref={_dropdownRef}>
            <li>
                <Link to='/' className='user-menu-anchor'>Home</Link>
            </li>
        </ul>
    );

    /**
     * Listen to props and change style
     */
    function _dropdownRef(list){
        if(!list) return;

        if(isOn)list.classList.add('on');
        else list.classList.remove('on');
    }

};

export default DropdownList;

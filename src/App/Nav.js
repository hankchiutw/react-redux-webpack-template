"use strict";

import React from 'react';
import { Link } from 'react-router';

const Nav = () => {

    return <div className='nav-wrapper'>
        <p className='item'>
            <Link to='/page1'>Page1</Link>
        </p>
    </div>;
};

export default Nav;

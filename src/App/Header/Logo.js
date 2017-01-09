"use strict";

import React from 'react';
import { Link } from 'react-router';

const Logo = ({toggleNav}) => {
    return (
        <span className='logo'>
            <span className='cell hidden-xs' onClick={toggleNav}><img src='img/logo.png' /></span>

            <span className='visible-xs-inline pull-left cell' onClick={toggleNav}>
                <i className='fa fa-bars fa-lg'></i>
            </span>

            <span className='visible-xs-inline pull-left cell' onClick={toggleNav}>
                <i className='fa fa-long-arrow-left fa-lg'></i>
            </span>
        </span>

    );

};

export default Logo;

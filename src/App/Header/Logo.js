"use strict";

import React from 'react';
import { Link } from 'react-router';

const Logo = ({isNavOn, toggleNav}) => {
    const anchorForMobile = (isNavOn ?
        <span className='visible-xs-inline pull-left cell' onClick={toggleNav}>
            <i className='fa fa-long-arrow-left fa-lg'></i>
        </span>
        :
        <span className='visible-xs-inline pull-left cell' onClick={toggleNav}>
            <i className='fa fa-bars fa-lg'></i>
        </span>
    );

    return (
        <span className='logo'>
            <span className='cell hidden-xs' onClick={toggleNav}><img src='img/logo.png' /></span>
            { anchorForMobile }

        </span>

    );

};

export default Logo;

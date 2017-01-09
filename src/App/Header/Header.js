"use strict";

import React from 'react';
import { Link } from 'react-router';

import Usermenu from './Usermenu';

const Header = ({username, toggleUsermenu, isUsermenuOn, toggleNav}) => (

    <div className='header-wrapper'>
        <span className='logo cell hidden-xs' onClick={toggleNav}><img src='img/logo.png' /></span>

        <span className='visible-xs-inline pull-left cell'>
            <i className='fa fa-bars fa-lg'></i>
        </span>

        <span className='visible-xs-inline pull-left cell'>
            <i className='fa fa-long-arrow-left fa-lg'></i>
        </span>

        <Usermenu {...{username, toggleUsermenu, isUsermenuOn}} />

    </div>
);

export default Header;

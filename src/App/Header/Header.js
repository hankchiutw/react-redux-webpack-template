"use strict";

import React from 'react';
import { Link } from 'react-router';

const Header = ({username, isUsermenuOn, toggleUsermenu, toggleNav}) => (

    <div className='header-wrapper'>
        <span className='logo cell hidden-xs' onClick={toggleNav}><img src='img/logo.png' /></span>

        <span className='visible-xs-inline pull-left cell'>
            <i className='fa fa-bars fa-lg'></i>
        </span>

        <span className='visible-xs-inline pull-left cell'>
            <i className='fa fa-long-arrow-left fa-lg'></i>
        </span>

        <div className="dropdown pull-right cell user-menu-cell" onClick={toggleUsermenu}>
            <button className="btn dropdown-toggle" type="button">
                <span>{username}</span>
                <span className="caret"></span>
            </button>
            <ul className="dropdown-menu dropdown-menu-right on">
                <li>
                    <Link to='/' className='user-menu-anchor'>Home</Link>
                </li>
            </ul>
        </div>

    </div>
);

export default Header;

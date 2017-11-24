"use strict";

import React from 'react';
import { Link } from 'react-router';

import Logo from './LogoContainer';
import Usermenu from './UsermenuContainer';

const Header = () => (
  <div className='header-wrapper'>
    <Logo />
    <Usermenu />
  </div>
);

export default Header;

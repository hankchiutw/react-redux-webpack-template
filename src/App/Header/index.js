"use strict";

import React from 'react';
import { Link } from 'react-router';

import actions from './_redux/actions';
import reducers from './_redux/reducers';

import Logo from './_redux/LogoContainer';
import Usermenu from './_redux/UsermenuContainer';

const Header = () => (
  <div className='header-wrapper'>
    <Logo />
    <Usermenu />
  </div>
);

export default Header;
export { actions, reducers };

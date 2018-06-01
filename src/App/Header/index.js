import React from 'react';

import Logo from './_redux/LogoContainer';
import Usermenu from './_redux/UsermenuContainer';

const Header = () => (
  <div className="header-wrapper">
    <Logo />
    <Usermenu />
  </div>
);

export default Header;
export { actions } from './_redux/actions';
export { reducers } from './_redux/reducers';

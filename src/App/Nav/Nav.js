

import React from 'react';
import { NavLink as Link } from 'react-router-dom';

const Nav = ({ isOn }) => {
  return (
    <div ref={_domRef}>
      <div className="nav-wrapper">
        <Link to="/" className="item" activeClassName="on" exact>Home</Link>
        <Link to="/page1" className="item" activeClassName="on">Page1</Link>
        <Link to="/new-component-flow" className="item" activeClassName="on">New component flow</Link>
      </div>
      <div className="content-mask" />
    </div>
  );

  /**
   * Listen to props and change style
   */
  function _domRef(dom) {
    if (!dom) return;

    if (isOn) {
      dom.querySelector('.nav-wrapper').classList.add('on');
      dom.querySelector('.content-mask').classList.add('on');
    } else {
      dom.querySelector('.nav-wrapper').classList.remove('on');
      dom.querySelector('.content-mask').classList.remove('on');
    }
  }
};

export default Nav;

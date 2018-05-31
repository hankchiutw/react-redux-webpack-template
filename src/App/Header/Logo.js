import React from 'react';

const Logo = ({ isNavOn, toggleNav }) => {
  const anchorForMobile = (isNavOn ?
    (<span className="visible-xs-inline pull-left cell" onClick={toggleNav}>
      <i className="fa fa-long-arrow-left fa-lg" />
     </span>)
    :
    (<span className="visible-xs-inline pull-left cell" onClick={toggleNav}>
      <i className="fa fa-bars fa-lg" />
     </span>)
  );

  return (
    <span className="logo">
      <span className="cell hidden-xs" onClick={toggleNav}><img src="./images/logo.png" /></span>
      { anchorForMobile }

    </span>

  );
};

export default Logo;

"use strict";

import React from 'react';

import Header from './Header';
import Nav from './Nav';
import Content from './Content';
import Alert from './Alert';

import combinedReducer from './_redux/combinedReducer';

const App = ({children, location, route}) => {
  const label = ({
    '/': 'Home',
    '/page1': 'Page1'
  })[location.pathname];

  return (
    <div>
      <Header />
      <Nav />
      <Content children={children} label={label} />
      <Alert />
    </div>
  );
};

export default App;
export { combinedReducer };

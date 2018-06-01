import React from 'react';

import Header from './Header';
import Nav from './Nav';
import Content from './Content';
import Alert from './Alert';

const App = ({ location }) => {
  const label = ({
    '/': 'Home',
    '/page1': 'Page1'
  })[location.pathname];

  return (
    <div>
      <Header />
      <Nav />
      <Content label={label} />
      <Alert />
    </div>
  );
};

export default App;
export { combinedReducer } from './_redux/combinedReducer';

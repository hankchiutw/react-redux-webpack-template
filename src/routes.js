/**
 *  Routing definition is independant from Redux.
 *  Top level component App defines the layout.
 *  Each child route will be rendered to App/Content
 */

import React from 'react';
import { HashRouter as Router, withRouter } from 'react-router-dom';

import App from 'App';

const AppWithRouter = withRouter(App);
export default (
  <Router>
    <AppWithRouter />
  </Router>
);

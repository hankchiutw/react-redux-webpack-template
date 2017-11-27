"use strict";

/**
 *  Routing definition is independant from Redux.
 *  Top level component App defines the layout.
 *  Each child route will be rendered to App/Content
 */

import React from 'react';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';

import App from 'App';
import Home from 'Home';
import Page1 from 'Page1';
import NewComponentFlow from 'NewComponentFlow';

export default (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />

      <Route path='/page1' component={Page1} />
      <Route path='/new-component-flow' component={NewComponentFlow} />
    </Route>
  </Router>
);

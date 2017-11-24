"use strict";

import App from 'App';
import Home from 'App/Home';
import Page1 from 'Page1';
import NewComponentFlow from 'NewComponentFlow';

import React from 'react';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';

export default (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />

      <Route path='/page1' component={Page1} />
      <Route path='/new-component-flow' component={NewComponentFlow} />
    </Route>
  </Router>
);

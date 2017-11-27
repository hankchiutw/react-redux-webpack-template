"use strict";

import { combineReducers } from 'redux';
import { checkCurrentUser } from './reducers';
import { reducers as headerReducers } from 'App/Header';
import { reducers as alertReducers } from 'App/Alert';

export default combineReducers({
  currentUser: checkCurrentUser,
  isUsermenuOn: headerReducers.toggleUsermenu,
  isNavOn: headerReducers.toggleNav,
  message: alertReducers.triggerAlert
});

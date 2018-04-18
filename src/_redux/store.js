"use strict";

import { createStore } from 'redux';
import rootReducer from './rootReducer';

export const preloadedState = {
  appState: {
//    currentPage: '',
    currentUser: {
      username: 'Guest'
    },
    message: '',
    isNavOn: true,
    isUsermenuOn: false
  }
  //, page1State: {}
};

export default createStore(rootReducer, preloadedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

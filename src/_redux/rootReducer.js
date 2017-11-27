"use strict";

import { combineReducers } from 'redux';
import { combinedReducer as appReducer } from 'App';

export default combineReducers({
  appState: appReducer
});

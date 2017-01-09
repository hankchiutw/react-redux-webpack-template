"use strict";

import { createStore } from 'redux';
import rootReducer from './rootReducer';

const preloadedState = {
    appState: {
/*
        currentPage: '',
*/
        currentUser: {
            username: 'Guest'
        },
        isNavOn: true,
        isUsermenuOn: false
    }
    //, page1State: {}
};

export default createStore(rootReducer, preloadedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

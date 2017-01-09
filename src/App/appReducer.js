"use strict";

import { combineReducers } from 'redux';
import { toggleUsermenu, toggleNav } from './Header/reducers';

export default combineReducers({
    currentUser: checkCurrentUser,
    isUsermenuOn: toggleUsermenu, 
    isNavOn: toggleNav 
});

function checkCurrentUser(state = {}, action){
    if(action.type != 'CHECK_CURRENT_USER') return state;
    return state;
}
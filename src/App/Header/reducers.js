"use strict";

export const toggleUsermenu = (state = false, action) => {
  if(action.type !== 'TOGGLE_USERMENU') return state;
  return !state;
};

export const toggleNav = (state = true, action) => {
  if(action.type !== 'TOGGLE_NAV') return state;
  return !state;
};


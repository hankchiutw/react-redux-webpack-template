"use strict";

export const checkCurrentUser = (state = {}, action) => {
  if (action.type != 'CHECK_CURRENT_USER') {
    return state;
  }

  return state;
};

export default { checkCurrentUser };

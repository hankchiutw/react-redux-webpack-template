"use strict";

export const triggerAlert = (state = '', action) => {
  switch(action.type){

    case 'ALERT_MESSAGE':
      return action.message;

    case 'ALERT_LOADING':
      return 'loading';

    default:
      return state;
  }
};

export default { triggerAlert };

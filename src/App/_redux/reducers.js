export const checkCurrentUser = (state = {}, action) => {
  if (action.type !== 'CHECK_CURRENT_USER') {
    return {
      username: 'Guest'
    };
  }

  return state;
};

export default { checkCurrentUser };

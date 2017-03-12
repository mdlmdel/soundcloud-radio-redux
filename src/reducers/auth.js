import * as actionTypes from '../constants/actionTypes';

export default function(state = null, action) {
  switch (action.type) {
    case actionTypes.ME_SET:
      return action.user;
    // If we have no case above, then we will return this default.
    default:
      return state;
  }
}

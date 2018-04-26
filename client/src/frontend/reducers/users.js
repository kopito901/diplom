import {
  GET_USERLIST, TRY_LOGIN, AUTH_VIA_COOKIES
} from '../actions/users';
import * as fetch from '../classes/fetch';

const initialState = {
  usersList : [],
  currentUser : {}
};

export default function playlists(state = initialState, action) {
  switch (action.type) {
    case GET_USERLIST:
      return Object.assign({}, state, {
        usersList : action.payload.users
      });

    case AUTH_VIA_COOKIES:
      return Object.assign({}, state, {
        currentUser: action.payload.user
      });

    case TRY_LOGIN:
      let data = action.payload

      if(data.status) {
        return Object.assign({}, state, {
          currentUser: data.user
        });
      } else {
        return Object.assign({}, state);
      }
      break;

    default:
      return state;
  }
  return state;
}

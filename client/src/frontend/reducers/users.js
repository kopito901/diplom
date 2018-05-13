import {
  GET_USERLIST, GET_STUDENTSLIST, GET_BOSSESLIST, TRY_LOGIN, AUTH_VIA_COOKIES
} from '../actions/users';
import * as fetch from '../classes/fetch';

const initialState = {
  usersList : {
    students : [],
    bosses : []
  },
  currentUser : {}
};

export default function users(state = initialState, action) {
  switch (action.type) { 
    case GET_USERLIST:
      return Object.assign({}, state, {
        usersList : action.payload.users
      });

    case GET_STUDENTSLIST:
      return Object.assign({}, state, {
        usersList : {
          students : action.payload.users
        }
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

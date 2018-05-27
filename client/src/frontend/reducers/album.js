import {
  GET_LIST
} from '../actions/album';

const initialState = {
  list: [],
};

export default function album(state = initialState, action) {
  switch (action.type) {
    case GET_LIST:
      return Object.assign({}, state, {
        list: action.payload
      });
      break;

    default:
      return state;
  }
  return state;
}

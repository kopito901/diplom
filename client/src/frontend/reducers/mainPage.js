import {
  GET_INFO
} from '../actions/mainPage';

const initialState = {
  info: {},
};

export default function mainPage(state = initialState, action) {
  switch (action.type) {
    case GET_INFO:
      return Object.assign({}, state, {
        info: action.payload
      });
      break;

    default:
      return state;
  }
  return state;
}

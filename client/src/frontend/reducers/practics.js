import {
  GET_PRACTICS
} from '../actions/practics';

const initialState = {
  list: [],
};

export default function album(state = initialState, action) {
  switch (action.type) {
    case GET_PRACTICS:
      return Object.assign({}, state, {
        list: action.payload
      });
      break;

    default:
      return state;
  }
  return state;
}

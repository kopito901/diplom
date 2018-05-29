import {
  GET_LIST, GET_DISCIPLINES
} from '../actions/routes';

const initialState = {
  list: [],
  disciplines: []
};

export default function routes(state = initialState, action) {
  switch (action.type) {
    case GET_LIST:
      return Object.assign({}, state, {
        list: action.payload
      });
      break;

    case GET_DISCIPLINES:
      return Object.assign({}, state, {
        disciplines: action.payload
      });
      break;

    default:
      return state;
  }
  return state;
}

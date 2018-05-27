import {
  GET_BOSS
} from '../actions/studentData';

const initialState = {
  boss: {}
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case GET_BOSS:
      return Object.assign({}, state, {
        boss : action.payload
      });

    default:
      return state;
  }
  return state;
}

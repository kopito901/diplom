import {
  GET_DAYS, GET_BUILDINGS, GET_SCHEDULE, GET_BUILDINGS_SCHEDULE, SET_CURRENT_WEEK, GET_MARKS
} from '../actions/schedule'

const initialState = {
  days: [],
  buildings: [],
  pairs: [],
  buildingsSchedule: [],
  currentWeek: {},
  currentMarks: []
};

export default function schedule(state = initialState, action) {
  switch (action.type) {
    case GET_DAYS:
      return Object.assign({}, state, {
        days: action.payload
      });
      break;

    case GET_BUILDINGS:
      return Object.assign({}, state, {
        buildings: action.payload
      });
      break;

    case GET_SCHEDULE:
      return Object.assign({}, state, {
        pairs: action.payload
      });
      break;

    case GET_BUILDINGS_SCHEDULE:
      return Object.assign({}, state, {
        buildingsSchedule: action.payload
      });
      break;

    case SET_CURRENT_WEEK:
      return Object.assign({}, state, {
        currentWeek: action.payload
      });
      break;

    case GET_MARKS:
      return Object.assign({}, state, {
        currentMarks: action.payload
      });
      break;

    default:
      return state;
  }
  return state;
}

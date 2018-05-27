import {
  GET_STUDENTS_LIST, GET_GROUPS_LIST, SET_STUDENT_FILTER, SET_SEARCH_STUDENT_STRING,
  SET_GROUP_FILTER, SET_SEARCH_GROUP_STRING, SET_CURRENT_USER
} from '../actions/managerData'

const initialState = {
  students: {
    current: {},
    list: [],
    filter: '',
    search: {
      str: '',
      type: ''
    },
  },
  groups: {
    list: [],
    filter: '',
    search: {
      str: '',
      type: ''
    },
  }
};

export default function managerData(state = initialState, action) {
  switch (action.type) {
    case GET_STUDENTS_LIST:
      return Object.assign({}, state, {
        students: {
          list: action.payload,
          search: state.students.search,
          filter: state.students.filter,
          current: state.students.current,
        }
      });
      break;

    case GET_GROUPS_LIST:
      return Object.assign({}, state, {
        groups: {
          list: action.payload,
          search: state.groups.search,
          filter: state.groups.filter
        }
      });
      break;

    case SET_STUDENT_FILTER:
      return Object.assign({}, state, {
        students: {
          list: state.students.list,
          search: state.students.search,
          filter: action.payload,
          current: state.students.current,
        }
      });
      break;

    case SET_SEARCH_STUDENT_STRING:
      return Object.assign({}, state, {
        students: {
          list: state.students.list,
          search: action.payload,
          filter: state.students.filter,
          current: state.students.current,
        }
      });
      break;

    case SET_GROUP_FILTER:
      return Object.assign({}, state, {
        groups: {
          list: state.groups.list,
          search: state.groups.search,
          filter: action.payload
        }
      });
      break;

    case SET_SEARCH_GROUP_STRING:
      return Object.assign({}, state, {
        groups: {
          list: state.groups.list,
          search: action.payload,
          filter: state.groups.filter,
        }
      });
      break;

    case SET_CURRENT_USER:
      return Object.assign({}, state, {
        students: {
          current: action.payload,
          list: state.groups.list,
          search: state.groups.search,
          filter: state.groups.filter
        }
      });
      break;

    default:
      return state;
  }
  return state;
}

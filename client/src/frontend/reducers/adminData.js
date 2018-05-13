import {
  PICK_USER, REMOVE_PICKED_USER, GET_DEPARTMENTS_LIST, GET_DEPARTMENTS_LIST_COUNT,
  GET_DEPARTMENTS_GROUPS, PICK_GROUP, REMOVE_PICKED_GROUP, GET_MANAGERS_LIST,
  GET_GROUPS_LIST, GET_EDIT_GROUPS_LIST, SET_STUDENT_FILTER, SET_SEARCH_STRING,
  PICK_MANAGER, REMOVE_PICKED_MANAGER, GET_CHANCERY
} from '../actions/adminData';

const initialState = {
  pickedUsers : [],
  pickedEditUser : {},
  departments : [],
  departmentsCount : [],
  departmentsGroup : [],
  groups : [],
  pickedGroups : [],
  pickedEditGroup: {},
  editGroups : [],
  managers: [],
  pickedManagers: [],
  pickedEditManager: {},
  chancery: {},
  filter : '',
  search: {
    string: '',
    type: ''
  }
};

export default function adminData(state = initialState, action) {
  switch (action.type) {
    case GET_DEPARTMENTS_LIST:
      return Object.assign({}, state, {
        departments: action.payload.departments
      });
      break;

    case GET_DEPARTMENTS_LIST_COUNT:
      return Object.assign({}, state, {
        departmentsCount: action.payload
      });
      break;

    case GET_DEPARTMENTS_GROUPS:
      return Object.assign({}, state, {
        departmentsGroup: action.payload.groups
      });
      break;

    case GET_GROUPS_LIST:
      return Object.assign({}, state, {
        groups: action.payload.groups
      });
      break;

    case GET_EDIT_GROUPS_LIST:
      return Object.assign({}, state, {
        editGroups: action.payload.groups
      });
      break;

    case GET_MANAGERS_LIST:
      return Object.assign({}, state, {
        managers: action.payload.managers
      });
      break;

    case SET_STUDENT_FILTER:
      return Object.assign({}, state, {
        filter: action.payload
      });
      break;

    case SET_SEARCH_STRING:
      return Object.assign({}, state, {
        search: {
          string: action.payload.string,
          type: action.payload.type
        }
      });
      break;

    case PICK_USER:
      return Object.assign({}, state, {
        pickedUsers: [
          ...state.pickedUsers,
          action.payload
        ],
        pickedEditUser: action.payload
      });
      break;

    case REMOVE_PICKED_USER:
      return Object.assign({}, state, {
        pickedUsers: state.pickedUsers.filter((user) =>  user.id !== action.payload.id ),
        pickedEditUser: {}
      });
      break;

    case PICK_GROUP:
      return Object.assign({}, state, {
        pickedGroups: [
          ...state.pickedGroups,
          action.payload
        ],
        pickedEditGroup: action.payload
      });
      break;

    case REMOVE_PICKED_GROUP:
      return Object.assign({}, state, {
        pickedGroups: state.pickedGroups.filter((group) =>  group.id !== action.payload.id ),
        pickedEditGroup: {}
      });
      break;

    case PICK_MANAGER:
      return Object.assign({}, state, {
        pickedManagers: [
          ...state.pickedManagers,
          action.payload
        ],
        pickedEditManager: action.payload
      });
      break;

    case REMOVE_PICKED_MANAGER:
      return Object.assign({}, state, {
        pickedManagers: state.pickedManagers.filter((manager) =>  manager.id !== action.payload.id ),
        pickedEditManager: {}
      });
      break;

    case GET_CHANCERY:
      return Object.assign({}, state, {
        chancery: action.payload
      });
      break;



    default:

  }
  return state;
}

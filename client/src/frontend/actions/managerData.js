export const GET_STUDENTS_LIST = 'GET_STUDENTS_LIST';
export const GET_GROUPS_LIST = 'GET_GROUPS_LIST';
export const SET_STUDENT_FILTER = 'SET_STUDENT_FILTER';
export const SET_SEARCH_STUDENT_STRING = 'SET_SEARCH_STUDENT_STRING';
export const SET_GROUP_FILTER = 'SET_GROUP_FILTER';
export const SET_SEARCH_GROUP_STRING = 'SET_SEARCH_GROUP_STRING';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export function getStudentsList(students) {
  return ({ type : GET_STUDENTS_LIST, payload : students });
}

export function getGroupsList(groups) {
  return ({ type : GET_GROUPS_LIST, payload : groups });
}

export function setStudentFilter(data) {
  return ({ type : SET_STUDENT_FILTER, payload : data });
}

export function setSearchStudentString(data) {
  return ({ type : SET_SEARCH_STUDENT_STRING, payload : data });
}

export function setGroupFilter(data) {
  return ({ type : SET_GROUP_FILTER, payload : data });
}

export function setSearchGroupString(data) {
  return ({ type : SET_SEARCH_GROUP_STRING, payload : data });
}

export function setCurrentUser(data) {
  return ({ type : SET_CURRENT_USER, payload : data });
}

export const GET_DEPARTMENTS_LIST = 'GET_DEPARTMENTS_LIST';
export const GET_DEPARTMENTS_LIST_COUNT = 'GET_DEPARTMENTS_LIST_COUNT';
export const GET_DEPARTMENTS_GROUPS = 'GET_DEPARTMENTS_GROUPS';
export const GET_GROUPS_LIST = 'GET_GROUPS_LIST';
export const GET_EDIT_GROUPS_LIST = 'GET_EDIT_GROUPS_LIST';
export const GET_MANAGERS_LIST = 'GET_MANAGERS_LIST';
export const PICK_MANAGER = 'PICK_MANAGER';
export const REMOVE_PICKED_MANAGER = 'REMOVE_PICKED_MANAGER';
export const PICK_USER = 'PICK_USER';
export const REMOVE_PICKED_USER = 'REMOVE_PICKED_USER';
export const PICK_GROUP = 'PICK_GROUP';
export const REMOVE_PICKED_GROUP = 'REMOVE_PICKED_GROUP';
export const SET_STUDENT_FILTER = 'SET_STUDENT_FILTER';
export const SET_SEARCH_STRING = 'SET_SEARCH_STRING';
export const GET_CHANCERY = 'GET_CHANCERY';

export function getDepartmentsList(departments) {
  return ({ type : GET_DEPARTMENTS_LIST, payload : departments });
}

export function getDepartmentsListWithCount(departments) {
  return ({ type : GET_DEPARTMENTS_LIST_COUNT, payload : departments });
}

export function getDepartmentsGroups(groups) {
  return ({ type : GET_DEPARTMENTS_GROUPS, payload : groups });
}

export function getManagersList(managers) {
  return ({ type : GET_MANAGERS_LIST, payload : managers });
}

export function pickManager(manager) {
  return ({ type : PICK_MANAGER, payload : manager });
}

export function removePickedManager(manager) {
  return ({ type : REMOVE_PICKED_MANAGER, payload : manager });
}

export function getGroupsList(department) {
  return ({ type : GET_GROUPS_LIST, payload : department });
}

export function getEditGroupsList(department) {
  return ({ type : GET_EDIT_GROUPS_LIST, payload : department });
}

export function addPickedUser(user) {
  return ({ type : PICK_USER, payload : user });
}

export function removePickedUser(user) {
  return ({ type : REMOVE_PICKED_USER, payload : user });
}

export function addPickedGroup(group) {
  return ({ type : PICK_GROUP, payload : group });
}

export function removePickedGroup(group) {
  return ({ type : REMOVE_PICKED_GROUP, payload : group });
}

export function setStudentFilter(data) {
  return ({ type : SET_STUDENT_FILTER, payload : data });
}

export function setSearchString(data) {
  return ({ type : SET_SEARCH_STRING, payload : data });
}

export function getChancery(data) {
  return ({ type : GET_CHANCERY, payload : data });
}

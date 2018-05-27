export const GET_USER_INFO = 'GET_USER_INFO';
export const GET_STUDENTSLIST = 'GET_STUDENTSLIST';
export const GET_BOSSESLIST = 'GET_BOSSESSLIST';
export const TRY_LOGIN = 'TRY_LOGIN';
export const AUTH_VIA_COOKIES = 'AUTH_VIA_COOKIES';

export function getStudentsList(students) {
  return ({ type : GET_STUDENTSLIST, payload : students });
}

export function getBossesList() {
  return ({ type : GET_BOSSESLIST });
}

export function refreshCurrentUser(user) {
  return ({ type : GET_USER_INFO, payload : user });
}

export function tryLogin(data) {
  return { type : TRY_LOGIN, payload : data };
}

export function authViaCookies(user) {
  return ({ type : AUTH_VIA_COOKIES, payload : user });
}

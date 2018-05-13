export const GET_USERLIST = 'GET_USERLIST';
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

export function tryLogin(data) {
  return { type : TRY_LOGIN, payload : data };
}

export function authViaCookies(user) {
  return ({ type : AUTH_VIA_COOKIES, payload : user });
}

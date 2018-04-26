export const GET_USERLIST = 'GET_USERLIST';
export const TRY_LOGIN = 'TRY_LOGIN';
export const AUTH_VIA_COOKIES = 'AUTH_VIA_COOKIES';

export function tryLogin(data) {
  return { type : TRY_LOGIN, payload : data };
}

export function authViaCookies(user) {
  return ({ type : AUTH_VIA_COOKIES, payload : user });
}

export const GET_INFO = 'GET_INFO';

export function getDepartmentInfo(data) {
  return ({ type : GET_INFO, payload : data });
}

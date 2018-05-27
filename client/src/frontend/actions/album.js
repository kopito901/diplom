export const GET_LIST = 'GET_LIST';

export function getList(items) {
  return ({ type : GET_LIST, payload : items });
}

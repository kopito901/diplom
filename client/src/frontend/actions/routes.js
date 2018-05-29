export const GET_LIST = 'GET_LIST';
export const GET_DISCIPLINES = 'GET_DISCIPLINES';

export function getList(items) {
  return ({ type : GET_LIST, payload : items });
}

export function getDisciplines(data) {
  return ({ type : GET_DISCIPLINES, payload : data });
}

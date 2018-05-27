export const GET_PRACTICS = "GET_PRACTICS";


export function getPractics(data) {
  return ({ type : GET_PRACTICS, payload : data });
}

export const GET_BOSS = "GET_BOSS";

export function getBoss(data) {
  return ({ type : GET_BOSS, payload : data });
}

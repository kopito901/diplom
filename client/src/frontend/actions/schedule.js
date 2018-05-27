export const GET_DAYS = "GET_DAYS";
export const GET_BUILDINGS = "GET_BUILDINGS";
export const GET_SCHEDULE = "GET_SCHEDULE";
export const GET_BUILDINGS_SCHEDULE = "GET_BUILDINGS_SCHEDULE";
export const SET_CURRENT_WEEK = "SET_CURRENT_WEEK";
export const GET_MARKS = "GET_MARKS";


export function getDays(days) {
  return ({ type : GET_DAYS, payload : days });
}

export function getBuildings(buildings) {
  return ({ type : GET_BUILDINGS, payload : buildings });
}

export function getSchedule(schedule) {
  return ({ type : GET_SCHEDULE, payload : schedule });
}

export function getBuildingsSchedule(schedule) {
  return ({ type : GET_BUILDINGS_SCHEDULE, payload : schedule });
}

export function setCurrentWeek(range) {
  return ({ type : SET_CURRENT_WEEK, payload : range });
}

export function getMarks(data) {
  return ({ type : GET_MARKS, payload : data });
}

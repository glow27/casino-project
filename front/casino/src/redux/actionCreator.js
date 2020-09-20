import { LOGIN, LOGOUT, ADD_POINTS, SUBSTRACT_POINTS } from './actionTypes';

export const userLogout = () => ({
  type: LOGOUT,
});

export const userLogin = (user) => ({
  type: LOGIN,
  payload: user,
});

export const plusPoints = (points) => ({
  type: ADD_POINTS,
  payload: points,
});

export const minusPoints = (points) => ({
  type: SUBSTRACT_POINTS,
  payload: points,
});

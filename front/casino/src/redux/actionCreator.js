import { LOGIN, LOGOUT, ADD_POINTS, SUBSTRACT_POINTS, GET_SPIN,ADD_PIC } from './actionTypes';

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

export const spinRoulette = () => ({
  type: GET_SPIN,
  payload: [Math.floor(Math.random() * (6 - 1 + 1)) + 1,
    Math.floor(Math.random() * (6 - 1 + 1)) + 1,
    Math.floor(Math.random() * (6 - 1 + 1)) + 1]
});

export const addPic = (pic) => ({
  type: ADD_PIC,
  payload: pic
})

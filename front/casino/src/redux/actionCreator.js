import { LOGIN, LOGOUT, ADD_POINTS, SUBSTRACT_POINTS, GET_SPIN,ADD_PIC, FAKE_SPIN } from './actionTypes';

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
  payload: [Math.round(1 - 0.5 + Math.random() * (11 - 1 + 1)),
    Math.round(1 - 0.5 + Math.random() * (11 - 1 + 1)),
    Math.round(1 - 0.5 + Math.random() * (11 - 1 + 1))]
});

export const addPic = (pic) => ({
  type: ADD_PIC,
  payload: pic
})

export const fakeRoulette = () => ({
  type: FAKE_SPIN,
  payload: [2,
    5,
    9]
});
import { LOGIN, LOGOUT } from './actionTypes';

export const login = (user) => ({
  type: LOGIN,
  payload: user,
});

export const logout = (user) => ({
  type: LOGOUT,
  payload: user,
});

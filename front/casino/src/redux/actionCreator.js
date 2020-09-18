import { LOGIN, LOGOUT } from './actionTypes';

export const login = (user) => ({
  type: LOGIN,
  payload: {name: user.name, email: user.email, points: user.points},
});

export const logout = (user) => ({
  type: LOGOUT,
  payload: user,
});

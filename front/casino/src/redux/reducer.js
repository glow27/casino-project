import {LOGIN, LOGOUT} from './actionTypes';

export default function(state, action) {
  switch (action.type) {
    case LOGIN: 
      return action.payload;
    case LOGOUT:
      return {...state, auth: false}
  
    default:
      return state;
  }
}

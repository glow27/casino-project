import { LOGIN, LOGOUT, ADD_POINTS, SUBSTRACT_POINTS } from './actionTypes';

export default function (state = {auth: false}, action) {
  switch (action.type) {
    case LOGIN:
      return action.payload ;
    case LOGOUT:
      return { ...state, auth: false  };
    case ADD_POINTS:
      return { ...state, points: state.points + action.payload  };
    case SUBSTRACT_POINTS:
      return { ...state, points: state.points - action.payload  };

    default:
      return state;
  }
}

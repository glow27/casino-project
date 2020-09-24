import { LOGIN, LOGOUT, ADD_POINTS, SUBSTRACT_POINTS,ADD_PIC } from './actionTypes';

export default function (state = {auth: false, pic: ''}, action) {
  switch (action.type) {
    case LOGIN:
      return action.payload ;
    case LOGOUT:
      return { ...state, auth: false  };
    case ADD_POINTS:
      return { ...state, points: state.points + action.payload  };
    case SUBSTRACT_POINTS:
      return { ...state, points: state.points - action.payload  };
      case ADD_PIC:
        return { ...state, pic: action.payload  };
    default:
      return state;
  }
}

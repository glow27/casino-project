import { GET_SPIN } from './actionTypes';

export const reducerRoulette = (state = {
    spines: [0,0,0]}, action) => {
    switch (action.type) {
        case GET_SPIN:
            return {...state,
                spines: action.payload,
            };
        default:
            return state;
    }
}
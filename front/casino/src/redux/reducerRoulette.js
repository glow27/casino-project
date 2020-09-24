import { GET_SPIN, FAKE_SPIN } from './actionTypes';

export const reducerRoulette = (state = {
    spines: [0, 0, 0]
}, action) => {
    switch (action.type) {
        case GET_SPIN:
            return {
                ...state,
                spines: action.payload,
            };
        case FAKE_SPIN:
            return {
                ...state,
                spines: action.payload,
            };
        default:
            return state;
    }
}
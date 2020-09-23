import { combineReducers } from "redux";
import reducer from "./reducer";
import { reducerRoulette } from "./reducerRoulette";

export const rootReducer = combineReducers({
    roulette: reducerRoulette,
    user: reducer,
})

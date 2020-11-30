import { createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './rootReducer';

const preloadedState = window.localStorage.getItem('state') || '{"user": {"auth": false}}';
const initialState = JSON.parse(preloadedState);

export const store = createStore(rootReducer, initialState, composeWithDevTools());

store.subscribe(() => {
  const state = store.getState();
  window.localStorage.setItem('state', JSON.stringify(state));
});

import { createStore, compose } from 'redux';

import reducers from './reducers';

export default function(initialState = {}) {
  return createStore(
    reducers,
    initialState
  );
}

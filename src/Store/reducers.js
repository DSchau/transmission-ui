import * as actions from './actions';

export default function rootReducer(state = {}, action = {}) {
  switch (action.type) {
    case actions.SEARCH_QUERY.type:
      return Object.assign({}, state, {
        query: action.query
      });
    default:
      return state;
  }
}

import * as actions from './actions';

export default function rootReducer(state = {}, action = {}) {
  switch (action.type) {
    case actions.TOGGLE_DISPLAY_MODE:
      return Object.assign({}, state, {
        mode: action.mode
      });
    case actions.TOGGLE_SETTINGS:
      return Object.assign({}, state, {
        settings: action.settings
      });
    case actions.UPDATE_TORRENTS:
      return Object.assign({}, state, {
        torrents: action.torrents
      })
    default:
      return state;
  }
}

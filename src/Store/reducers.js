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
      });
    case actions.TOGGLE_TORRENT_SELECTION:
      return Object.assign({}, state);
    case actions.TOGGLE_OPEN_DIALOG:
      return Object.assign({}, state, {
        openTorrent: action.openTorrent
      });
    case actions.SEARCH_QUERY:
      return Object.assign({}, state, {
        search: Object.assign({}, state.search, {
          query: action.query
        })
      });
    case actions.SEARCH_FOCUS_CHANGE:
      return Object.assign({}, state, {
        search: Object.assign({}, state.search, {
          focused: action.focused
        })
      });
    default:
      return state;
  }
}

import { TOGGLE_DISPLAY_MODE, TOGGLE_SETTINGS } from '../../Store/actions';

export function toggleDisplayMode(mode) {
  return {
    type: TOGGLE_DISPLAY_MODE,
    mode
  };
}

export function setSettings(settings) {
  return {
    type: TOGGLE_SETTINGS,
    settings
  };
}

export const getDisplayMode = (mode) => {
  return mode === 'fullview' ? 'listview' : 'fullview';
}

export const mapStateToProps = (state) => {
  return {
    mode: getDisplayMode(state.mode),
    settings: state.settings,
    torrents: state.torrents
  };
};

export const mapDispatchToProps = (dispatch) => ({
  closeSettings: () => {
    dispatch(setSettings(false))
  },
  openSettings: () => {
    dispatch(setSettings(true))
  },
  onToggleDisplayMode: (mode) => {
    dispatch(toggleDisplayMode(mode));
  }
});

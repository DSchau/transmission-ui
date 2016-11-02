import { TOGGLE_OPEN_DIALOG } from '../../Store/actions';

export const setOpenTorrentDialogAction = (openTorrent) => {
  return {
    type: TOGGLE_OPEN_DIALOG,
    openTorrent
  };
};

export const mapStateToProps = (state) => {
  return {
    openTorrent: state.openTorrent
  };
};

export const mapDispatchToProps = (dispatch) => ({
  closeTorrentDialog: () => {
    dispatch(setOpenTorrentDialogAction(false));
  },
  openTorrentDialog: () => {
    dispatch(setOpenTorrentDialogAction(true));
  }
});

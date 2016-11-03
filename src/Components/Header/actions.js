import { TOGGLE_OPEN_DIALOG } from '../../Store/actions';

export const openTorrentDialogAction = () => {
  return {
    type: TOGGLE_OPEN_DIALOG,
    openTorrent: true
  };
};

export const mapStateToProps = (state) => {
  return {
    openTorrent: state.openTorrent
  };
};

export const mapDispatchToProps = (dispatch) => ({
  openTorrentDialog: () => {
    dispatch(openTorrentDialogAction());
  }
});

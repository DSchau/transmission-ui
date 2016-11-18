import { TOGGLE_EDIT_MODE, TOGGLE_OPEN_DIALOG } from '../../Store/actions';

export const toggleEditModeAction = (edit) => {
  return {
    type: TOGGLE_EDIT_MODE,
    edit: !edit
  };
};

export const openTorrentDialogAction = () => {
  return {
    type: TOGGLE_OPEN_DIALOG,
    openTorrent: true
  };
};

export const mapStateToProps = ({ edit, openTorrent }) => {
  return {
    edit,
    openTorrent
  };
};

export const mapDispatchToProps = (dispatch) => ({
  openTorrentDialog: () => {
    dispatch(openTorrentDialogAction());
  },
  toggleEdit: (edit) => {
    dispatch(toggleEditModeAction(edit));
  }
});

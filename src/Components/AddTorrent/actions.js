import { TOGGLE_OPEN_DIALOG } from '../../Store/actions';

export function closeDialogAction() {
  return {
    type: TOGGLE_OPEN_DIALOG,
    openTorrent: false
  }
}

export const mapStateToProps = (state) => {
  return {
    open: state.openTorrent
  };
};

export const mapDispatchToProps = (dispatch) => ({
  onClose: () => {
    dispatch(closeDialogAction());
  }
});

import { UPDATE_TORRENTS } from '../../Store/actions';

export function updateTorrents(torrents) {
  return {
    type: UPDATE_TORRENTS,
    torrents
  };
}

export const mapStateToProps = (state) => {
  return {
    torrents: state.torrents
  };
};

export const mapDispatchToProps = (dispatch) => ({
  setTorrents: (torrents) => {
    dispatch(updateTorrents(torrents));
  }
});

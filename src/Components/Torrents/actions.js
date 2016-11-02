import { UPDATE_TORRENTS } from '../../Store/actions';

export function updateTorrentAction(torrents) {
  return {
    type: UPDATE_TORRENTS,
    torrents
  };
}

export function updateTorrents(torrents) {
  return torrents || [];
}

export const mapStateToProps = (state) => {
  return {
    torrents: state.torrents
  };
};

export const mapDispatchToProps = (dispatch) => ({
  setTorrents: (torrents) => {
    dispatch(updateTorrentAction(torrents));
  }
});

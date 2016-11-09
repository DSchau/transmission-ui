import {
  TOGGLE_TORRENT_SELECTION,
  TORRENT_ADD,
  UPDATE_TORRENTS
} from '../../Store/actions';

export function selectTorrentAction(torrent) {
  return {
    type: TOGGLE_TORRENT_SELECTION,
    torrent
  };
}

export function addTorrentAction(torrents) {
  return {
    type: TORRENT_ADD,
    torrentsToAdd: [].concat(torrents)
  }
}

export function updateTorrentAction(torrents) {
  return {
    type: UPDATE_TORRENTS,
    torrents
  };
}

export function getFilteredTorrents(torrents, query) {
  const normalizedQuery = query.replace(/\s+/g, '.');
  let expr; 
  try {
    expr = new RegExp(`.*${normalizedQuery}.*`, 'i');
  } catch (e) {
    expr = new RegExp(normalizedQuery.match(/([a-z0-9])/gi).join(''), 'i');
  }
  return torrents
    .filter(({ errorString, name }) => expr.test(name) || expr.test(errorString));
}

export const mapStateToProps = (state) => {
  return {
    torrents: getFilteredTorrents(state.torrents, state.search && state.search.query || '')
  };
};

export const mapDispatchToProps = (dispatch) => ({
  addTorrents: (torrents) => {
    dispatch(addTorrentAction(torrents));
  },
  setTorrents: (torrents) => {
    dispatch(updateTorrentAction(torrents));
  },
  toggleTorrentSelection: (torrent) => {
    dispatch(selectTorrentAction(torrent));
  }
});

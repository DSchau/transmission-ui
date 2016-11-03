import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import AddTorrent from './add-torrent';

import { mapStateToProps, mapDispatchToProps } from './actions';

function AddTorrentContainer(props) {
  return <AddTorrent { ...props } />;
}

AddTorrentContainer.propTypes = {
  open: PropTypes.bool
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTorrentContainer);

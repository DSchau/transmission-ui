import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import './add-torrent.css';

export default class AddTorrent extends Component {
  static defaultProps = {
    onClose: () => {}
  };

  static propTypes = {
    onClose: PropTypes.func,
    open: PropTypes.bool.isRequired
  };

  handleModalClose() {
    return () => {
      this.props.onClose();
    };
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        onTouchTap={this.handleModalClose()}
      />,
      <FlatButton
        label="Add"
        primary={true}
        onTouchTap={this.handleModalClose()}
      />
    ];
    return (
      <Dialog open={this.props.open} contentClassName="add-torrent" title="Add Torrents" modal={true} actions={actions} >
        <FlatButton label="Browse File(s)" labelPosition="before">
          <input className="add-torrent-file" type="file" accept=".torrent" />
        </FlatButton>
        <TextField id="url" hintText="Or enter a URL" />
        <TextField id="destination" hintText="Destination folder" />
      </Dialog>
    );
  }
}

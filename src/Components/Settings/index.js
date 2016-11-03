import React, { Component, PropTypes } from 'react';

import Dialog from 'material-ui/Dialog';
import { Tabs, Tab } from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';

import TorrentIcon from 'material-ui/svg-icons/file/file-download';
import SpeedIcon from 'material-ui/svg-icons/action/swap-horiz';
import PeerIcon from 'material-ui/svg-icons/social/group';
import NetworkIcon from 'material-ui/svg-icons/social/public';

import './settings.css';

export default class Settings extends Component {
  static defaultProps = {
    onClose: () => {},
    open: false
  };

  static propTypes = {
    onClose: PropTypes.func,
    open: PropTypes.bool.isRequired
  };

  handleClose() {
    return () => {
      this.props.onClose();
    };
  }

  get dialogStyle() {
    return {
      padding: 0
    };
  }

  render() {
    return (
      <Dialog open={this.props.open} onRequestClose={this.handleClose()} contentClassName="settings" bodyStyle={this.dialogStyle}>
        <Tabs contentContainerStyle={{ paddingLeft: 5, paddingRight: 5 }}>
          <Tab icon={<TorrentIcon />}>
            <h3>Downloading</h3>
            <TextField id="download-dir" hintText="Download to..." />
            <Checkbox label="Start when added" />
            <Checkbox label="Append .part to incomplete file names" />
            <h3>Seeding</h3>

          </Tab>
          <Tab icon={<SpeedIcon />}>
            <h3>Speed</h3>
          </Tab>
          <Tab icon={<PeerIcon />}>
            <h3>Peers</h3>
          </Tab>
          <Tab icon={<NetworkIcon />}>
            <h3>Network</h3>
          </Tab>
        </Tabs>
      </Dialog>
    );
  }
}

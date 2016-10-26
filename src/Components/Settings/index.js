import React, { Component, PropTypes } from 'react';

import Dialog from 'material-ui/Dialog';
import { Tabs, Tab } from 'material-ui/Tabs';

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
      <div className="settings">
        <Dialog open={this.props.open} onRequestClose={this.handleClose()} bodyStyle={this.dialogStyle}>
          <Tabs contentContainerStyle={{ paddingLeft: 5, paddingRight: 5 }}>
            <Tab icon={<TorrentIcon />}>
              <h3>Torrents</h3>
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
      </div>
    );
  }
}

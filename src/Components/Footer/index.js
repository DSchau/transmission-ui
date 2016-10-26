import React, { Component } from 'react';

import SettingsIcon from 'material-ui/svg-icons/action/settings';
import ListIcon from 'material-ui/svg-icons/action/list';
import { grey900 } from 'material-ui/styles/colors';

import ActionIcon from '../ActionIcon/';

import './footer.css';

import Settings from '../Settings/';

export default class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  handleSettingsClick() {
    return () => {
      this.setState({
        open: true
      });
    };
  }

  handleListviewClick() {
    return () => {

    };
  }

  handleClose() {
    return () => {
      this.setState({
        open: false
      });
    };
  }

  render() {
    return (
      <span>
        <Settings open={this.state.open} onClose={this.handleClose()} />
        <footer className="transmission-footer">
          <ActionIcon color={grey900} onClick={this.handleSettingsClick()}>
            <SettingsIcon />
          </ActionIcon>
          <p className="status">
            <strong>592</strong> <span>torrents</span>
          </p>
          <ActionIcon color={grey900} onClick={this.handleListviewClick()}>
            <ListIcon />
          </ActionIcon>
        </footer>
      </span>
    );
  }
}

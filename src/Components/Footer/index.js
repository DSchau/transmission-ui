import React, { Component } from 'react';
import { connect } from 'react-redux';

import SettingsIcon from 'material-ui/svg-icons/action/settings';
import ListIcon from 'material-ui/svg-icons/action/list';
import FullViewIcon from 'material-ui/svg-icons/action/view-list';
import { grey900 } from 'material-ui/styles/colors';

import ActionIcon from '../ActionIcon/';

import './footer.css';

import Settings from '../Settings/';

import { mapStateToProps, mapDispatchToProps } from './actions';

class Footer extends Component {
  render() {
    const numTorrents = this.props.torrents.length;
    return (
      <span>
        <Settings open={this.props.settings} onClose={() => this.props.closeSettings() }/>
        <footer className="transmission-footer">
          <ActionIcon color={grey900}>
            <SettingsIcon onClick={() => this.props.openSettings()} />
          </ActionIcon>
          <p className="status">
            <strong>{numTorrents}</strong> <span>torrent{numTorrents === 1 ? '' : 's' }</span>
          </p>
          <ActionIcon color={grey900} onClick={() => this.props.onToggleDisplayMode(this.props.mode)}>
            { this.props.mode === 'listview' ? <ListIcon /> : <FullViewIcon /> }
          </ActionIcon>
        </footer>
      </span>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);

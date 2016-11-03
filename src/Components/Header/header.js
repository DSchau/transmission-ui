import React, { Component, PropTypes } from 'react';

import './header.css';

import IconButton from 'material-ui/IconButton';
import { cyan500 } from 'material-ui/styles/colors';

import Open from 'material-ui/svg-icons/content/add-box';
import Pause from 'material-ui/svg-icons/av/pause';
import Resume from 'material-ui/svg-icons/av/play-arrow';
import Remove from 'material-ui/svg-icons/action/delete';
import Edit from 'material-ui/svg-icons/editor/mode-edit';

import ActionIcon from '../ActionIcon/';
import AddTorrent from '../AddTorrent/';

export default class Header extends Component {
  static defaultProps = {
    onClick: () => {},
    openTorrent: false
  };

  static propTypes = {
    closeTorrentDialog: PropTypes.func,
    onClick: PropTypes.func,
    openTorrent: PropTypes.bool,
    openTorrentDialog: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = {
      search: false
    };
  }

  handleOpenDialogClose() {
    return () => {
      return this.props.closeTorrentDialog();
    };
  }

  handleClick(ev) {
    if ( ev.target.nodeName === 'HEADER' ) {
      this.props.onClick();
    }
  }

  render() {
    return (
      <div onClick={(ev) => this.handleClick(ev)}>
        <AddTorrent />
        <div className="transmission-header">
          <header>
            <ActionIcon onClick={() => this.props.openTorrentDialog() }>
              <Open />
            </ActionIcon>
            {
              this.props.edit &&
              <div className="actions">
                <ActionIcon>
                  <Pause />
                </ActionIcon>
                <ActionIcon>
                  <Resume />
                </ActionIcon>
                <ActionIcon>
                  <Remove />
                </ActionIcon>
              </div>
            }
            <ActionIcon>
              <Edit />
            </ActionIcon>
          </header>
        </div>
      </div>
    );
  }
}

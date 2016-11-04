import React, { Component } from 'react';
import { connect } from 'react-redux';

import Torrents from './torrents';

import style from './torrents.css';

import { mapStateToProps, mapDispatchToProps } from './actions';

class TorrentsContainer extends Component {
  componentDidMount() {
    this.getTorrents()
      .then((torrents) => {
        this.props.setTorrents(torrents);
      });
  }

  getTorrents() {
    return fetch('/transmission/rpc', {
      body: JSON.stringify({
        'arguments': {
            fields: [
              'error',
              'errorString',
              'id',
              'name',
              'percentDone',
              'sizeWhenDone',
              'status',
              'totalSize'
            ]
        },
        method: 'torrent-get'
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })
      .then((response) => response.json())
      .then((json) => {
        if ( json.arguments && json.arguments.torrents ) {
          return json.arguments.torrents;
        }
        return [];
      })
      .catch(() => []);
  }

  render() {
    return (
      <div className={style.transmissionTorrents}>
        <Torrents onTorrentAdd={this.props.addTorrents} list={this.props.torrents} onTorrentSelect={this.props.toggleTorrentSelection} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TorrentsContainer);

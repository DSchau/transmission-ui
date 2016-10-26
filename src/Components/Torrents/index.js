import React, { Component } from 'react';

import Torrents from './torrents';

import './torrents.css';

export default class TorrentsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      torrents: []
    };

    this.init();
  }

  init() {
    this.getTorrents()
      .then((torrents) => {
        this.setState({
          loading: false,
          torrents
        });
      });
  }

  getTorrents() {
    return fetch('/transmission/rpc')
      .then((response) => response.json())
      .then((json) => {
        if ( json.arguments && json.arguments.torrents ) {
          return json.arguments.torrents;
        }
        return [];
      });
  }

  handleTorrentSelect() {
    return (selected) => {
      console.log(selected);
    };
  }

  render() {
    return (
      <div className="transmission-torrents">
        <Torrents list={this.state.torrents} onSelect={this.handleTorrentSelect()} />
      </div>
    );
  }
}

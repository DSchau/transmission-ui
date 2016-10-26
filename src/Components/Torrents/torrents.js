import React, { Component, PropTypes } from 'react';
import { List } from 'react-virtualized';
import debounce from 'lodash.debounce';

import Torrent from '../Torrent/';

export default class Torrents extends Component {
  static defaultProps = {
    list: [],
    onSelect: () => {}
  };

  static propTypes = {
    list: PropTypes.array,
    onSelect: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = {
      clientWidth: document.body.clientWidth,
      list: props.list,
      selected: []
    };

    this.initListeners();
  }

  componentWillReceiveProps(props) {
    this.setState(props);
  }

  initListeners() {
    window.addEventListener('resize', debounce(() => {
      this.setState({
        clientWidth: document.body.clientWidth
      });
    }), 50);
  }

  torrentRow({ key, style, index }) {
    const torrent = this.state.list[index];
    const className = index % 2 === 0 ? 'even' : 'odd';
    return (
      <div
        className={className}
        key={key}
        style={style}
        onClick={this.handleTorrentClick(torrent, index)}
      >
        <Torrent {...torrent} />
      </div>
    );
  }

  handleTorrentClick(torrent, index) {
    return () => {
      const selected = this.state.selected;
      const selectedIndex = selected.indexOf(torrent);
      if ( selectedIndex > -1 ) {
        selected.splice(index, 1);
      } else {
        selected.push(torrent);
      }
      this.props.onSelect(selected);
      this.setState({
        selected
      });
    };
  }

  render() {
    const rowHeight = 50;
    return (
      <List
        width={this.state.clientWidth}
        height={this.state.list.length*rowHeight}
        rowCount={this.state.list.length}
        rowHeight={rowHeight}
        rowRenderer={this.torrentRow.bind(this)}
      />
    );
  }
}

import React, { Component, PropTypes } from 'react';
import { List } from 'react-virtualized';
import Dropzone from 'react-dropzone';
import debounce from 'lodash.debounce';

import Torrent from '../Torrent/';

export default class Torrents extends Component {
  static defaultProps = {
    list: [],
    onTorrentAdd: () => {},
    onTorrentSelect: () => {},
    resizeDebounce: 25
  };

  static propTypes = {
    list: PropTypes.array,
    onTorrentAdd: PropTypes.func,
    onTorrentSelect: PropTypes.func,
    resizeDebounce: PropTypes.number
  };

  constructor(props) {
    super(props);

    this.state = {
      clientWidth: document.body.clientWidth
    };
  }

  componentWillMount() {
    this.resizeListener = debounce(this.resizeListener.bind(this), this.props.resizeDebounce);

    addEventListener('resize', this.resizeListener);
  }

  componentWillUnmount() {
    removeEventListener('resize', this.resizeListener);
  }

  resizeListener() {
    this.setState({
      clientWidth: document.body.clientWidth
    });
  }

  torrentRow({ key, style, index }) {
    const torrent = this.props.list[index];
    const className = index % 2 === 0 ? 'even' : 'odd';
    return (
      <div
        className={className}
        key={key}
        style={style}
        onClick={() => this.props.onTorrentSelect(torrent, index)}
      >
        <Torrent {...torrent} />
      </div>
    );
  }

  render() {
    const rowHeight = 50;
    return (
      <Dropzone accept=".torrent" style={{
        height: 'auto',
        width: 'auto'
      }} disableClick={true} onDrop={(torrents) => this.props.onTorrentAdd(torrents)} >
        <List
          width={this.state.clientWidth}
          height={this.props.list.length*rowHeight}
          rowCount={this.props.list.length}
          rowHeight={rowHeight}
          rowRenderer={this.torrentRow.bind(this)}
        />
      </Dropzone>
    );
  }
}

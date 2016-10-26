import React, { Component, PropTypes } from 'react';

import FileIcon from 'material-ui/svg-icons/editor/insert-drive-file';

import './torrent.css';

export default class Torrent extends Component {
  static propTypes = {
    addedDate: PropTypes.number,
    name: PropTypes.string,
    percentDone: PropTypes.number,
    selected: PropTypes.bool,
    sizeWhenDone: PropTypes.number,
    totalSize: PropTypes.number
  };

  constructor(props) {
    super(props);
  }

  getClassName() {
    return [
      this.props.percentDone === 1 ? 'complete' : '',
      this.props.status === 4 ? 'downloading' : '',
      this.props.status === 0 ? 'paused' : '',
      this.props.selected ? 'selected' : '',
      this.props.errorString ? 'error' : ''
    ]
      .filter((name) => !!name);
  }

  getProgressStyle() {
    return {
      width: (100 * (this.props.totalSize / this.props.sizeWhenDone)) + '%'
    };
  }

  getFileExtension(name) {
    const extension = name.match(/(?:\.)(.+$)/);
    if ( extension ) {
      return extension.pop();
    }
    return '';
  }

  render() {
    const className = this.getClassName()
      .concat('transmission-torrent');
    const extension = this.getFileExtension(this.props.name);
    return (
      <div className={className.join(' ')}>
        <div className="overlay"></div>
        <div className="progress" style={this.getProgressStyle()}></div>
        <div className="details">
          <div className="flex">
            <div className="file-icon">
              { extension && <h3 className="file-extension">{this.props.name.slice(-3)}</h3> }
              <FileIcon color="rgba(255, 255, 255, 1)" style={{ height: 32, width: 32 }} />
            </div>
            <h3 className="name">{this.props.name}</h3>
          </div>
          { this.props.errorString && <p className="error-message">{this.props.errorString}</p>}
        </div>
      </div>
    );
  }
}

import React, { Component, PropTypes } from 'react';

import FileIcon from 'material-ui/svg-icons/editor/insert-drive-file';

import style from './torrent.css';

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
      this.props.percentDone === 1 ? style.complete : '',
      this.props.status === 4 ? style.downloading : '',
      this.props.status === 0 ? style.paused : '',
      this.props.selected ? style.selected : '',
      this.props.errorString ? style.error : ''
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
      .concat(style.torrent);
    const extension = this.getFileExtension(this.props.name);
    return (
      <div className={className.join(' ')}>
        <div className={style.overlay}></div>
        <div className={style.progress} style={this.getProgressStyle()}></div>
        <div className={style.details}>
          <div className={style.flex}>
            <div className={style.fileIcon}>
              { extension && <h3 className={style.fileExtension}>{this.props.name.slice(-3)}</h3> }
              <FileIcon color="rgba(255, 255, 255, 1)" style={{ height: 32, width: 32 }} />
            </div>
            <h3 className={style.name}>{this.props.name}</h3>
          </div>
          { this.props.errorString && <p className={style.errorMessage}>{this.props.errorString}</p>}
        </div>
        { this.props.selected &&
          <div className={style.selected} />
        }
      </div>
    );
  }
}

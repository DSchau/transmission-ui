import React, { Component, PropTypes } from 'react';
import debounce from 'lodash.debounce';

import IconButton from 'material-ui/IconButton';
import SearchIcon from 'material-ui/svg-icons/action/search';
import ClearIcon from 'material-ui/svg-icons/content/clear';

import style from './search.css';

export default class Search extends Component {
  static defaultProps = {
    onFocusChange: () => {},
    onSearch: () => {},
    rateLimit: 150,
    search: {
      focused: false,
      query: ''
    }
  };

  static propTypes = {
    onFocusChange: PropTypes.func,
    onSearch: PropTypes.func,
    rateLimit: PropTypes.number,
    search: PropTypes.shape({
      focused: PropTypes.bool,
      query: PropTypes.string
    })
  };

  constructor(props) {
    super(props);

    this.state = {
      focused: false,
      query: ''
    };
  }

  componentWillMount() {
    this.updateSearchQuery = debounce(this.updateSearchQuery.bind(this), this.props.rateLimit);
  }

  clearSearchQuery(query = '') {
    this.updateSearchQuery(query);
    this.refs.search.value = '';
  }

  updateSearchQuery(query) {
    this.props.onSearch(query);
  }

  render() {
    const className = [
      style.search
    ].concat(this.props.search.focused && style.focused || []).join(' ');
    return (
      <div className={className} >
        <SearchIcon className={style['search-icon']} />
        <input type="search" ref="search" placeholder="Search for..." onBlur={() => this.props.onFocusChange(false)} onFocus={() => this.props.onFocusChange(true)} onInput={(ev) => this.updateSearchQuery(ev.target.value)} defaultValue={this.props.search.query} />
        { this.props.search.query && this.props.search.query.length &&
          <IconButton className={style['clear-icon']} onTouchTap={(ev) => this.clearSearchQuery()}>
            <ClearIcon />
          </IconButton>
        }
      </div>
    );
  }
}

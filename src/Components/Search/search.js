import React, { Component, PropTypes } from 'react';
import debounce from 'lodash.debounce';

import SearchIcon from 'material-ui/svg-icons/action/search';

import './search.css';

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
      focused: false
    };
  }

  componentWillMount() {
    this.updateSearchQuery = debounce(this.updateSearchQuery.bind(this), this.props.rateLimit);
  }

  updateSearchQuery(query) {
    this.props.onSearch(query);
  }

  render() {
    const className = [
      'search'
    ].concat(this.props.search.focused && 'focused' || []).join(' ');
    return (
      <div className={className} >
        <SearchIcon />
        <input type="search" placeholder="Search for..." onBlur={() => this.props.onFocusChange(false)} onFocus={() => this.props.onFocusChange(true)} onInput={(ev) => this.updateSearchQuery(ev.target.value)} defaultValue={this.props.search.query} />
      </div>
    );
  }
}

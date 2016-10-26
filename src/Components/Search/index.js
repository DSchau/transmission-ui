import React, { Component } from 'react';

import SearchIcon from 'material-ui/svg-icons/action/search';

import './search.css';

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focused: false
    };
  }

  handleBlur() {
    return () => {
      this.setState({ focused: false });
    };
  }

  handleFocus() {
    return () => {
      this.setState({ focused: true });
    };
  }

  render() {
    return (
      <div className="search">
        <SearchIcon />
        <input type="search" placeholder="Search for..." onBlur={this.handleBlur()} onFocus={this.handleFocus()} />
      </div>
    );
  }
}

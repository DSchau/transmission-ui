import React, { Component } from 'react';

import './header.css';

import IconButton from 'material-ui/IconButton';
import { cyan500 } from 'material-ui/styles/colors';

import Open from 'material-ui/svg-icons/content/add-box';
import Pause from 'material-ui/svg-icons/av/pause';
import Resume from 'material-ui/svg-icons/av/play-arrow';
import Remove from 'material-ui/svg-icons/action/delete';
import Search from 'material-ui/svg-icons/action/search';

import ActionIcon from '../ActionIcon/';
import SearchFilter from '../Search/';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: false,
      focused: false
    };
  }

  handleClick(action) {
    return () => {
      console.log(action);
    };
  }

  handleSearchClick() {
    return () => {
      this.setState({
        search: !this.state.search
      });
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
      <div className="transmission-header">
        <header>
          <ActionIcon onClick={this.handleClick('open')}>
            <Open />
          </ActionIcon>
          <div className="actions">
            <ActionIcon onClick={this.handleClick('pause')}>
              <Pause />
            </ActionIcon>
            <ActionIcon onClick={this.handleClick('resume')}>
              <Resume />
            </ActionIcon>
            <ActionIcon onClick={this.handleClick('remove')}>
              <Remove />
            </ActionIcon>
          </div>
          <ActionIcon onClick={this.handleSearchClick()}>
            <Search color={this.state.search ? cyan500 : 'white'} />
          </ActionIcon>
        </header>
        {
          this.state.search &&
          <div className={this.state.focused && 'focused'}>
            <SearchFilter />
          </div>
        }
      </div>
    );
  }
}

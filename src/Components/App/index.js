import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux'

import Header from '../Header/';
import TorrentList from '../Torrents/';
import Footer from '../Footer/';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { blue500, grey300, grey800 } from 'material-ui/styles/colors';

import 'normalize.css';
import './app.css';

const theme = getMuiTheme({
  palette: {
    accent1Color: blue500,
    primary1Color: grey300
  },
  tabs: {
    textColor: grey800,
    selectedTextColor: blue500
  }
});

export default class App extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    return (
      <Provider store={this.props.store}>
        <MuiThemeProvider muiTheme={theme}>
          <div className="transmission">
            <Header />
            <div className="transmission-content">
              <TorrentList />
            </div>
            <Footer />
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

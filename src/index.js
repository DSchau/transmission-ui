import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { render } from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';

import createStore from './Store/';

import App from './Components/App/';

injectTapEventPlugin();

const rootEl = document.getElementById('transmission-web-ui');
const store = createStore({
  mode: 'listview',
  settings: false,
  torrents: []
});

render(
  (
    <AppContainer>
      <App store={store} />
    </AppContainer>
  ),
  rootEl
);

if ( module.hot ) {
  module.hot.accept('./Components/App/', (...args) => {
    try {
      const NextApp = require('./Components/App/').default;
      render(
        (
          <AppContainer>
            <NextApp store={store} />
          </AppContainer>
        ),
        rootEl
      );
    } catch (e) {
      const RedBox = require('redbox-react').default;
      render(
        (
          <RedBox error={e} />
        ),
        rootEl
      );
    }

  });
}

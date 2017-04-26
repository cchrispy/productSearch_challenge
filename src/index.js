import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import mainReducer from './reducers/mainReducer';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin(); // for material-ui onTouchTap events

import App from './components/App.jsx';

let store = createStore(
  mainReducer
);

const refresh = () => {
  console.log(store.getState());
  render(
    <MuiThemeProvider>
      <Provider store={ store }>
        <App />
      </Provider>
    </MuiThemeProvider>,
    document.getElementById('app')
  )
}

refresh();
store.subscribe(refresh);

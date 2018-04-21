/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import RouterComponent from './src/components/RouterComponent';
import reducers from './src/reducers';

export default class App extends Component {
  render() {
      return (
        <Provider store={createStore(reducers)}>
        <RouterComponent />
        </Provider>
      );
}
}

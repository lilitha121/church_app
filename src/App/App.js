import React, { Component } from 'react'
import { Provider } from 'react-redux';
import store from '../store';
import Card from '../components/Component'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Card />
    </Provider>
  )
  }
}

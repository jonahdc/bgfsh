import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import Regimen from './Regimen'
import { Provider } from 'react-redux'
import reducers from './reducers'

let store = createStore(reducers);

export default class RegimenApp extends React.Component {

  render() {
    return (
    <Provider store={store}>
      <Regimen />
    </Provider>
  );

  }

}

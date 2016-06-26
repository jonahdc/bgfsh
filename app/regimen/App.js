import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import Regimen from './Regimen'
import { Provider } from 'react-redux'
import reducers from './reducers'

let store = createStore(reducers, applyMiddleware(logger));

function logger({ getState }) {
  return (next) => (action) => {
    console.log('will dispatch', action)

    // Call the next dispatch method in the middleware chain.
    let returnValue = next(action)

    console.log('state after dispatch', getState())

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue
  }
}


export default class RegimenApp extends React.Component {

  render() {
    return (
    <Provider store={store}>
      <Regimen />
    </Provider>
  );

  }

}

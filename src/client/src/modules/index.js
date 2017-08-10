import {combineReducers} from 'redux'

import {createStore, applyMiddleware, compose} from 'redux'
import fetchMiddleware from 'fetch-middleware'

import News from './News'

const combineReducer = combineReducers({
  News
})

export default createStore(
  combineReducer,
  {},
  compose(
    applyMiddleware(fetchMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)


import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
// import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';

import * as reducerList from './reducers';

const reducers = combineReducers({
  ...reducerList
})

let middlewares = [thunk];

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(...middlewares)
  )
);;

export default store;
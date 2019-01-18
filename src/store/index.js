
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
// import { apiMiddleware } from 'redux-api-middleware';

import * as reducerList from './reducers';

export const history = createBrowserHistory();

const reducers = combineReducers({
  router: connectRouter(history),
  ...reducerList
})

let middlewares = [thunk];

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(routerMiddleware(history), ...middlewares)
  )
);;

export default store;
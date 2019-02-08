
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';

import * as reducerList from './reducers';
import fbConfig from '../config/fbConfig';

export const history = createBrowserHistory();

console.log(reducerList);
const reducers = combineReducers({
  router: connectRouter(history),
  ...reducerList
})

let middlewares = [
  thunk.withExtraArgument({getFirebase, getFirestore})
];

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(routerMiddleware(history), ...middlewares),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig)
  )
);;

export default store;
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
// import throttle from 'lodash/throttle';
import rootReducer from './reducers/rootReducer';
import { loadState, saveState } from './localStorage';

// localStorage.removeItem('state');
const persistedState = loadState();
const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

store.subscribe(() =>
  saveState({
    user: {
      auth: store.getState().user.auth
    }
  })
);

export default store;

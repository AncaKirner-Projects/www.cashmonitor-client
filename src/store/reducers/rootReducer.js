import { combineReducers } from 'redux';
import userReducer from './userReducer';
import moneyReducer from './moneyReducer';

const rootReducer = combineReducers({
  user: userReducer,
  money: moneyReducer
});

export default rootReducer;

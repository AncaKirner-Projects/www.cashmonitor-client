import * as Immutable from 'immutable';
import createReducer from '../../../helpers/createReducer';
import accountActionTypes from '../../Accounts/actions/accountActionTypes';
import Account from '../entities/Account';

const initialState = {};
let appReducers = {};

appReducers[accountActionTypes.GET_ACCOUNTS_SUCCESS] = (state, payload) => {
  return state.set('list', Immutable.List(payload.map(account => new Account({
    id: account.docId,
    name: account.userData.name,
    type: account.userData.type,
    balance: account.userData.balance,
    currency: account.userData.currency,
    status: account.userData.status,
    createdTime: account.userData.createdTime,
    updatedTime: account.userData.updatedTime
  }))));
};
appReducers[accountActionTypes.GET_ACCOUNTS_ERROR] = (state, payload) => {
  return state.set('error', Immutable.fromJS(payload));
};
appReducers[accountActionTypes.ADD_ACCOUNT_SUCCESS] = (state, payload) => {
  const account = new Account({
    id: payload.id,
    name: payload.name,
    type: payload.type,
    balance: payload.balance,
    currency: payload.currency,
    status: payload.status,
    createdTime: payload.createdTime,
    updatedTime: payload.updatedTime
  });
  const newList = [...state.get('list'), account];
  return state.set('list', Immutable.List(newList));
};
appReducers[accountActionTypes.ADD_ACCOUNT_ERROR] = (state, payload) => {
  console.log('ERR:',payload);
  return state;
};
appReducers[accountActionTypes.DELETE_ACCOUNT_SUCCESS] = (state, payload) => {
  const newList = state.get('list').filter((elem) => elem.id !== payload.id);
  return state.set('list', newList);
};

export default createReducer(initialState, appReducers);
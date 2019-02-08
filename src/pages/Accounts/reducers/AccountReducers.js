import * as Immutable from 'immutable';
import createReducer from '../../../helpers/createReducer';
import accountActionTypes from '../../Accounts/actions/accountActionTypes';

const initialState = {};
let appReducers = {};

appReducers[accountActionTypes.ADD_ACCOUNT_SUCCESS] = (state, payload) => {
  console.log('gggggg');
  return state.set('', Immutable.fromJS(payload));
};

export default createReducer(initialState, appReducers);
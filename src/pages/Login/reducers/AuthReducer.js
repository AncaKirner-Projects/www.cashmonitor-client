import Immutable from 'immutable';

import createReducer from '../../../helpers/createReducer';
import LoginActionTypes from '../actions/loginActionTypes';

const initialState = {};
let appReducers = {};

appReducers[LoginActionTypes.LOGIN_SUCCESS] = (state, payload) => {
  return state.set('loginData', Immutable.fromJS(payload));
};

appReducers[LoginActionTypes.LOGIN_FAILURE] = (state, payload) => {
  return state.set('errorObj', Immutable.fromJS({
    data: payload.data,
    status: payload.status,
    statusText: payload.statusText
  }));
};

export default createReducer(initialState, appReducers);
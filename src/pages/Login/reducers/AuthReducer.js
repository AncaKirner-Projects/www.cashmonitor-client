/**
 * Reducer name: user
 */
import Immutable from 'immutable';

import createReducer from '../../../helpers/createReducer';
import LoginActionTypes from '../actions/loginActionTypes';

const initialState = {};
let appReducers = {};

/**
 * Put the authorized status into user store
 * @param {Map} state
 * @param {boolean} payload 
 * @returns state
 */
appReducers[LoginActionTypes.LOGIN_SUCCESS] = (state, payload) => {
  console.log(state, payload);
  return state.set('authorized', payload);
};

/**
 * Set user errorObj into user store
 * @param {Map} state
 * @param {boolean} payload 
 * @returns state
 */
appReducers[LoginActionTypes.LOGIN_FAILURE] = (state, payload) => {
  return state.set('errorObj', Immutable.fromJS({
    data: payload.data,
    status: payload.status,
    statusText: payload.statusText
  }));
};

export default createReducer(initialState, appReducers);
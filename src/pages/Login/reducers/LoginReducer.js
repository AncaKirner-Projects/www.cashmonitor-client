import createReducer from '../../../helpers/createReducer';
import LoginActionTypes from '../actions/loginActionTypes';

const initialState = {};
let appReducers = {};

appReducers[LoginActionTypes.LOGIN_SUCCESS] = (state, payload) => {

};

appReducers[LoginActionTypes.LOGIN_FAILURE] = (state, payload) => {

};

export default createReducer(initialState, appReducers);
import ActionTypes from '../actions/actionTypes';
import createReducer from '../helpers/reducerHelper';

const userReducer = createReducer(
  [],
  {
    [ActionTypes.LOGIN_USER]: (state, action) => {
      return {
        auth: action.payload.auth
      }
    },
    [ActionTypes.LOGOUT_USER]: (state, action) => {
      return {
        auth: action.payload.auth
      }
    }
  }
);

export default userReducer;
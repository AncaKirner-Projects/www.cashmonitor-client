import ActionTypes from '../actions/actionTypes';
import createReducer from '../helpers/reducerHelper';

const moneyReducer = createReducer(
  [],
  {
    [ActionTypes.ADD_INCOME]: (state, action) => {
      return {
        auth: action.payload.auth
      }
    },
    [ActionTypes.ADD_SPENT]: (state, action) => {
      return {
        auth: action.payload.auth
      }
    }
  }
);

export default moneyReducer;
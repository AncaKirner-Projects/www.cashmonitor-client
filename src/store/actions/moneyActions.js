import ActionTypes from './actionTypes';

export const addIncome = income => (dispatch) => {
  dispatch({
    type: ActionTypes.ADD_INCOME,
    payload: {
      auth: true
    }
  });
};

export const addSpent = spent => (dispatch) => {
  dispatch({
    type: ActionTypes.ADD_SPENT,
    payload: {
      auth: false
    }
  });
};

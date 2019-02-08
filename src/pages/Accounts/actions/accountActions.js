import accountActionTypes from './accountActionTypes';

export const addAccount = (account) => (dispatch, getState, {getFirebase, getFirestore}) => {
  console.log('%%%%%%%', getFirebase);
  dispatch({
    type: accountActionTypes.ADD_ACCOUNT_SUCCESS,
    payload: {
      account
    }
  });
}
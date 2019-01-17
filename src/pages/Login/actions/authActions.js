
import Cookies from 'js-cookie';
import loginActionTypes from './loginActionTypes';

export const login = credentials => (dispatch) => {
  // todo: getCredentials from API 
  Cookies.set('userAuthenticated', 1, { path: '/' });
  dispatch({
    type: loginActionTypes.LOGIN_SUCCESS,
    payload: true
  });
};
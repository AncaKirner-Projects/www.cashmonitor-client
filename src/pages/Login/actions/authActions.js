
import Cookies from 'js-cookie';
import firebase from '../../../config/fbConfig';
import loginActionTypes from './loginActionTypes';

import  { history } from '../../../store/index';

/**
 * Login with firebase email and password 
 * @param {Object} credentials 
 * @param {function} dispatch
 */
export const login = credentials => (dispatch) => {
  firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
  .then(user => {
    // get user id token from firebase
    firebase.auth().currentUser.getIdToken(true).then(idToken => {
      // TODO: change the login cookies strategy
      Cookies.set('idToken', idToken, { path: '/' });
      dispatch({
        type: loginActionTypes.LOGIN_SUCCESS,
        payload: true
      });
      // Login successfull -> Redirect to /app
      history.push('/app');
    })
  }).catch(function(err) {
    // TODO: Handle Errors here.
    console.log(err);
  });
};

/**
 * Logout from app
 * @param {function} dispatch
 */
export const logout = () => (dispatch) => {
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }).catch(err => {
    //  TODO: An error happened.
    console.log(err);
  });
}
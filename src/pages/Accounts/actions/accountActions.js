import accountActionTypes from './accountActionTypes';
import firebase from '../../../config/fbConfig';

export const getAccounts = () => (dispatch) => {
  try{
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        user.getIdToken(true).then(token => {
          fetch(`http://localhost:9000/api/accounts/${user.uid}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'X-Firebase-ID-Token': token
            }
          }).then(res => res.json())
            .then((data) => {
              console.log('gett');
              dispatch({
                type: accountActionTypes.GET_ACCOUNTS_SUCCESS,
                payload: data.data,
              });
            })
            .catch(err => {
              console.log(err);
              // dispatch(showError(err.statusText ? err.statusText : err, ActionTypes.PRODUCTS_SHOW_ERROR));
            });
        });
      }
    });
  } catch (err) {
    console.log(err);
  }  
};

export const addAccount = (account) => (dispatch) => {
  try{
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        user.getIdToken(true).then(token => {
          fetch(`http://localhost:9000/api/accounts/${user.uid}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-Firebase-ID-Token': token
            },
            body: JSON.stringify(account)
          }).then(res => res.json())
          .then(data => {
            dispatch({
              type: accountActionTypes.ADD_ACCOUNT_SUCCESS,
              payload: Object.assign({id: data.id}, account)
            });
          })
          .catch(err => {
            console.log(err);
            // dispatch(showError(err.statusText ? err.statusText : err, ActionTypes.PRODUCTS_SHOW_ERROR));
          });
        });
      }
    });
  } catch (err) {
    console.log(err);
  } 
};

export const editAccount = (account) => (dispatch) => {
  try{
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        user.getIdToken(true).then(token => {
          fetch(`http://localhost:9000/api/accounts/${user.uid}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'X-Firebase-ID-Token': token
            },
            body: JSON.stringify(account)
          }).then(res => res.json())
          .then(data => {
            dispatch({
              type: accountActionTypes.ADD_ACCOUNT_SUCCESS,
              payload: Object.assign({id: data.id}, account)
            });
          })
          .catch(err => {
            console.log(err);
            // dispatch(showError(err.statusText ? err.statusText : err, ActionTypes.PRODUCTS_SHOW_ERROR));
          });
        });
      }
    });
  } catch (err) {
    console.log(err);
  } 
};

export const deleteAccount = (id) => (dispatch) => {
  try{
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        user.getIdToken(true).then(token => {
          fetch(`http://localhost:9000/api/accounts/${id}/${user.uid}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'X-Firebase-ID-Token': token
            }
          }).then(res => {
            dispatch({
              type: accountActionTypes.DELETE_ACCOUNT_SUCCESS,
              payload: { id }
            });
          })
          .catch(err => {
            console.log(err);
            // dispatch(showError(err.statusText ? err.statusText : err, ActionTypes.PRODUCTS_SHOW_ERROR));
          });
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
}
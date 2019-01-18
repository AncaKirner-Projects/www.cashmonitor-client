import ActionTypes from './actionTypes';

export const login = user => (dispatch) => {
  dispatch({
    type: ActionTypes.LOGIN_USER,
    payload: {
      auth: true
    }
  });

  // fetch('http://localhost:8001/users', {
  //   method: 'POST', // or 'PUT'
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(user)
  // })
  //   .then(res => res.json())
  //   .then((data) => {
  //     dispatch({
  //       type: ActionTypes.FETCH_CATEGORIES,
  //       payload: {
  //         list: data.map(category => ({
  //           id: category.id,
  //           name: category.category_name,
  //           checked: false
  //         }))
  //       }
  //     });
  //   })
  //   .catch((err) => {
  //     // dispatch(showError(err.statusText ? err.statusText : err, ActionTypes.CATEGORY_SHOW_ERROR));
  //   });

};

export const logout = () => (dispatch) => {
  dispatch({
    type: ActionTypes.LOGOUT_USER,
    payload: {
      auth: false
    }
  });
};

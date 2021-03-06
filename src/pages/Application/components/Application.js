import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { isAuthenticated } from '../../../helpers/auth';
import  { history } from '../../../store/index';
import Home from '../../Home/components/Home';

class Application extends React.Component {
  render(){
    // if user is not logged in redirect to /login page
    if (!isAuthenticated()) {
      history.push('/login');
    }
    
    return (
      <div className="app">
        <Switch>
          <Route component={Home} path="/app/home" />
          <Redirect from="/app" to="/app/home" />
        </Switch>
      </div>
    )
  }
}

export default (Application);
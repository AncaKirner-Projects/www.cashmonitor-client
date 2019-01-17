import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { isAuthenticated } from '../../../helpers/auth';
import Home from '../../Home/components/Home';

class Application extends React.Component {
  render(){
    if (!isAuthenticated()) {
      this.props.history.push('/login');
    }
    
    return (
      <div className="app">
        <Switch>
          <Route exact component={Home} path="/app/home" />
          <Redirect from="/app" to="/app/home" />
        </Switch>
      </div>
    )
  }
}

export default (Application);
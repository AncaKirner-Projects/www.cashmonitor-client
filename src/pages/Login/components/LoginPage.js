import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

import { isAuthenticated } from '../../../helpers/auth';
import LoginForm from './LoginForm';

class LoginPage extends React.Component {
  render(){
    if (isAuthenticated()) {
      this.props.history.push('/app');
    }
    
    return (
      <div>
        <div className="container login-container">
          <div className="app-container">
            <div className="login">
              <Typography className="login-header" align="center" variant="h5" component="h2">
                Welcome!
              </Typography>
              <Switch>
                <Route exact component={LoginForm} path="/login/home" />
                <Redirect from="/login" to="/login/home" />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginPage;

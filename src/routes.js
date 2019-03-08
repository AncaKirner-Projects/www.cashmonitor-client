import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch, Redirect } from 'react-router-dom';

import Application from './pages/Application/components/Application';
import LoginPage from './pages/Login/components/LoginPage';
import  { history } from './store/index';

export const routes = (
  //synchronize router state with redux store, history will be available through connected components
  <ConnectedRouter history={history}>
    <Switch>
      <Route component={LoginPage} path="/login" />
      <Route component={Application} path="/app" />
      <Redirect from="*" to="/app" />
    </Switch>
  </ConnectedRouter>
);
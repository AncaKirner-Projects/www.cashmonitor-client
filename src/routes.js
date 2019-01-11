import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Application from './pages/Application/components/Application';
import LoginPage from './pages/Login/components/LoginPage';

export const routes = (
  <BrowserRouter>
    <Switch>
      <Route component={LoginPage} path="/login" />
      <Route component={Application} path="/app" />
      <Redirect from="*" to="/app" />
    </Switch>
  </BrowserRouter>
);
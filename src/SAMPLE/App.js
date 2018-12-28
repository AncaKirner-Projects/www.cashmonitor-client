import React from 'react';
import { LandingPage } from './landingPage';
import { AppLayout } from './appLayout';
import { Route, Switch } from 'react-router-dom';
import { ProtectedRoute } from './protectedRoute';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/login" component={LandingPage} />

        <ProtectedRoute exact path="/" component={AppLayout} />
      </Switch>
    </div>
  )
};
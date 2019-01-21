import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import SideBar from './SideBar';
import TopBar from './TopBar';
import Accounts from '../../Accounts/components/Accounts';
import Categories from '../../Accounts/components/Accounts';
import Dashboard from '../../Accounts/components/Accounts';

class Home extends React.Component {
  render() {
    return (
      <div>
        <SideBar />
        <TopBar />
        <div>
          <div className="app-content">
            <div className="app-content-options">
              <Switch>
                <Route exact strict component={Dashboard} path="/app/home/dashboard" />
                <Route exact strict component={Accounts} path="/app/home/settings/accounts" />
                <Route exact strict component={Categories} path="/app/home/settings/categories" />
                <Redirect from="/app" to="/app/home/dashboard" />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default (Home);

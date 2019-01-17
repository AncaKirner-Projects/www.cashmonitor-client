import React from 'react';
// import { Route, Switch, Redirect } from 'react-router-dom';

import SideBar from './SideBar';
import TopBar from './TopBar';

class Home extends React.Component {
  render() {
    return (
      <div>
        <SideBar />
        <TopBar />
        <div>
          <div className="app-content">
            <div className="app-content-options">
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default (Home);

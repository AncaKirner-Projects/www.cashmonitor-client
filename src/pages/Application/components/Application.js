import React from 'react';
// import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { isAuthenticated } from '../../../helpers/auth';

class Application extends React.Component {
  render(){
    if (!isAuthenticated()) {
      this.props.history.push('/login');
    }
    
    return (
      <div>
        Application
      </div>
    )
  }
}

export default (Application);
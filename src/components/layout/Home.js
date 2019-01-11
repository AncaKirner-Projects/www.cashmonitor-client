import React from 'react';
import { withRouter, Redirect } from "react-router";
// import { Redirect, Route } from 'react-router-dom';
import SideMenu from './SideMenu';
import LoginPage from '../auth/LoginPage';
import MainPage from './MainPage';
import { Route } from 'react-router-dom';
import Accounts from '../settings/Accounts';

const Home = (props) => {
  const { classes, theme, auth } = props;
  console.log(props);

  if (!auth) {
    props.history.push('/login');
    return <LoginPage />;
    // // !!! NOT WORKING
    // return <Redirect to='/login' />;
  } else {
    // props.history.push('/');
    return (
      <React.Fragment>
        <SideMenu classes={classes} theme={theme} />
        <MainPage classes={classes}>
          <Route path="/settings/accounts" component={Accounts} />
        </MainPage>
      </React.Fragment>
    );
  }
}

export default Home;

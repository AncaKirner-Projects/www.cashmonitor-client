import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/appStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from './layout/NavBar';
// import SideMenu from './layers/SideMenu';
import LoginPage from './auth/LoginPage';
// import styled from 'styled-components';
import PrivateRoute from '../routes/PrivateRoute';
import Home from './layers/Home';
import AddIncome from './income/AddIncome';

// const LoginPageStlyled = styled(LoginPage)`
//   margin-top: 200px;
// `;

class App extends Component {
  render() {
    const { classes, theme, isAuthenticated } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <NavBar classes={classes} />
        <Switch>
          <Route exact path="/" render={(props) =>
            <Home {...props} auth={isAuthenticated} classes={classes} theme={theme} />}
          />
          <Route path="/login" component={LoginPage} />
          <Route path="/add/income" component={AddIncome} />
          {/* <PrivateRoute exact path="/"
            component={Home} auth={isAuthenticated} classes={classes} theme={theme}
          /> */}
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>


      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.user.auth
  };
}

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps)
)(App);

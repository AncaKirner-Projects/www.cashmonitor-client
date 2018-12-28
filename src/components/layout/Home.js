import React from 'react';
import { withRouter } from "react-router";
import { Redirect, Route } from 'react-router-dom'
import SideMenu from './SideMenu';

const Home = (props) => {
  const { classes, theme, auth } = props;
  console.log('HOME', props);
  if (!auth) return <Redirect to='/login' />

  return (
    <React.Fragment>
      <SideMenu classes={classes} theme={theme} />
      {/* <MainPage classes={classes} />  */}
    </React.Fragment>
  );
}

export default withRouter(Home);

import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Accounts from '../settings/Accounts';

const MainPage = props => (
  <main className={props.classes.content}>
    <div className={props.classes.toolbar} />
    {/* <Route path="/settings/accounts" component={Accounts} /> */}
    {/* <Switch>
      <Route exact strict path="/" component={CardList} />
      <Route
        exact
        path="/products/:id"
        render={prop => <ProductDescription classes={props.classes} {...prop} />}
      />
      <Route exact strict path="/cart" component={Cart} />
    </Switch> */}
  </main>
);


MainPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default MainPage;

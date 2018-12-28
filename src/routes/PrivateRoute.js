import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
  console.log('PRIVATE', rest, Component);
  return (
    <Route
      {...rest}
      render={props =>
        rest.auth ?
          <Component {...props} {...rest} />
          :
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
      }
    />
  );
}

export default PrivateRoute;

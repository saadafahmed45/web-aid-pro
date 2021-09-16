import React, { useContext } from "react";
import {Redirect, Route, } from "react-router-dom";
import { UserContext } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {

  const [loggedinUser,setLoggedinUser] = useContext(UserContext);
    return (
      <Route
      {...rest}
      render={({ location }) =>
      loggedinUser.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )}
    />
    );
};

export default PrivateRoute;
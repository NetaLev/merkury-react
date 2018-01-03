import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, currentuser, ...rest }) => {
  return (
    <Route
      {...rest}
      render = {(props) => currentuser !== null
      ? <Component {...props} />
      : <Redirect to={{ pathname: "/login" }} /> } />
  );
};

export default PrivateRoute;
import React from 'react';
import {
  isAuthenticated,
  isTokenExpired,
  logout,
} from '../services/auth';

import { Route, Redirect } from "react-router-dom";
import Main from '../pages/Main'

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  //const signed = !!localStorage.getItem('@MYAPP/token');
  console.log('expired', isTokenExpired());

  if (!isAuthenticated() && isPrivate) {
    return <Redirect to="/SignIn" />
  }


  if (isTokenExpired()) {
    logout();
    return <Redirect to="/" />
  }




  return (
    <>
      {isPrivate && <Main />}
      <Route {...rest} component={Component} />
    </>
  )

}
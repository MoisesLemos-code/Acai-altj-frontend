import React from 'react';
import {
  isAuthenticated,
  isTokenExpired,
  logout,
  userLocal,
} from '../services/auth';
import { toast } from 'react-toastify';

import { Route, Redirect } from "react-router-dom";
import Main from '../pages/Main'

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  isAdmin = false,
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

  if (isAuthenticated() && isPrivate && isAdmin && !userLocal()) {
    toast.warn("Desculpe...somente usuários administradores podem acessar está página!")
    return <Redirect to="/" />
  }


  return (
    <>
      {isPrivate && <Main />}
      <Route {...rest} component={Component} />
    </>
  )

}
import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import Route from "./Route";

import SignIn from "../pages/SignIn";
import ForgotPass from "../pages/ForgotPass";
import SignUp from "../pages/SignUp";

import Main from "../pages/Main";
import Cliente from "../pages/Cliente";


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} isPrivate />
        <Route path="/SignIn" exact component={SignIn} />
        <Route path="/ForgotPass/" exact component={ForgotPass} />
        <Route path="/SignUp/" exact component={SignUp} />
        <Route path="/Cliente/" exact component={Cliente} isPrivate />
      </Switch>
    </BrowserRouter>
  );
}

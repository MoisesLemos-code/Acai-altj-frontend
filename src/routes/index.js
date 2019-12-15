import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import Route from "./Route";

import SignIn from "../pages/SignIn";
import ForgotPass from "../pages/ForgotPass";
import SignUp from "../pages/SignUp";

import Main from "../pages/Main";
import Cliente from "../pages/Cliente";
import Produto from "../pages/Produto"
import Venda from "../pages/Venda"


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} isPrivate />
        <Route path="/SignIn" exact component={SignIn} />
        <Route path="/ForgotPass/" exact component={ForgotPass} />
        <Route path="/SignUp/" exact component={SignUp} />
        <Route path="/Clientes/" exact component={Cliente} isPrivate />
        <Route path="/Produtos/" exact component={Produto} isPrivate />
        <Route path="/Venda/" exact component={Venda} isPrivate />
      </Switch>
    </BrowserRouter>
  );
}

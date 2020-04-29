import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Principal from "./pages/Principal";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Principal} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

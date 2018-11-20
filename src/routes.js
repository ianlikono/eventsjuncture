import React from "react";
import { Route, Switch } from "react-router-dom";
import EventDetail from "./components/EventDetail/EventDetail";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth"
export default (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/event/:id" exact component={EventDetail} />
    <Route path="/auth" exact component={Auth} />
  </Switch>
);

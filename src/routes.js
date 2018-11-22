import React from "react";
import { Route, Switch } from "react-router-dom";
import CreateEvent from "./components/CreateEvent/CreateEvent";
import EventDetail from "./components/EventDetail/EventDetail";
import Home from "./components/Home/Home";

export default (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/event/:id" exact component={EventDetail} />
    <Route path="/new" exact component={CreateEvent} />
  </Switch>
);

import React from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import CreateEvent from "./components/CreateEvent/Create";
import EventDetail from "./components/EventDetail/EventDetail";
import Home from "./components/Home/Home";
import User from "./components/User/User";
export default (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/event/:id" exact component={EventDetail} />
    <Route path="/auth" component={Auth} />
    <Route path="/new" exact component={CreateEvent} />
    <Route path="/user/:userId" exact component={User} />
    />
  </Switch>
);

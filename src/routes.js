import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import DatePicker from "./components/shared/DatePicker/DatePicker";

export default (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/components" exact component={DatePicker} />
  </Switch>
);

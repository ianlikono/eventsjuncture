import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignUp from './SignUp/SignUp'
import Login from './Login/Login'

export default (
  <Switch>
    <Route exact path="/auth/login" component={Login} />
    <Route exact path="/auth/signup" component={SignUp} />
  </Switch>

)
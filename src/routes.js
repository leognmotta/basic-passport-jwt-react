import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { IsLogged, PrivateRoute } from './helper/CustomRouteComponent';

import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import App from './pages/App/App';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <PrivateRoute exact path="/" component={App} />
      <IsLogged path="/login" component={Login} />
      <IsLogged path="/signup" component={SignUp} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;

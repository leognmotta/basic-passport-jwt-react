import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { IsLogged, PrivateRoute } from './helper/CustomRouteComponent';

import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import App from './pages/App/App';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <IsLogged path="/login" component={Login} />
      <IsLogged path="/signup" component={SignUp} />
      <PrivateRoute exact path="/" component={App} />
      <Route path="/home" component={() => <h1>Landing page</h1>} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;

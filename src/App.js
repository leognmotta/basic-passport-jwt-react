import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

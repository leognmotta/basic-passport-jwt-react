import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import protectedComp from './pages/Protected/Protected';
import Authenticated from './hoc/Authenticated/Authenticated';

class App extends Component {
  state = {
    islogged: true
  };

  render() {
    let login = <Route path="/login" component={Login} />;
    if (this.state.islogged) {
      login = <Redirect from="/login" to="/protected" />;
    }
    return (
      <BrowserRouter>
        <Switch>
          {login}
          <Route exact path="/" component={Home} />
          <Authenticated>
            <Route path="/protected" component={protectedComp} />
          </Authenticated>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

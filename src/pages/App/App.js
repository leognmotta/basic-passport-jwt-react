import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

import { logout } from '../../services/auth';
import api from '../../services/api';

import { Button } from './style';

class App extends Component {
  state = {
    username: null
  };

  fetchData = async () => {
    try {
      const user = await api.get('/auth/getuser');
      this.setState({ username: user.data.user.name });
    } catch (error) {
      logout();
      this.props.history.push('/login');
    }
  };

  logoutHandler = () => {
    logout();
    this.props.history.push('/login');
  };

  render() {
    return (
      <Fragment>
        {this.state.username ? (
          <h1> Você está Logado como: {this.state.username} </h1>
        ) : null}
        <Button onClick={this.fetchData}>Is valid Token?</Button>
        <Button onClick={this.logoutHandler}>Logout</Button>
      </Fragment>
    );
  }
}

export default withRouter(App);

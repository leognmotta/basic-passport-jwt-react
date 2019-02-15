import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { logout } from '../../services/auth';

import api from '../../services/api';

class App extends Component {
  async componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      await api.get('/auth/validate-token');
    } catch (error) {
      logout();
      this.props.history.push('/login');
    }
  };

  render() {
    return <button onClick={this.fetchData}>press</button>;
  }
}

export default withRouter(App);

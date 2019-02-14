import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import api from '../../services/api';

class Authenticated extends Component {
  state = {
    user: undefined
  };

  async componentDidMount() {
    const jwt = localStorage.getItem('jwt:');
    if (!jwt) {
      this.props.history.push('/login');
    }

    try {
      const getUser = await api.get('/auth/getuser', {
        headers: { Authorization: `Bearer ${jwt}` }
      });
      this.setState({ user: getUser });
    } catch (error) {
      console.log(error.data);
      localStorage.removeItem('jwt:');
      this.props.history.push('/login');
    }
  }

  render() {
    if (this.state.user === undefined) {
      return (
        <div>
          <h1>loading...</h1>
        </div>
      );
    }
    return <div>{this.props.children}</div>;
  }
}

export default withRouter(Authenticated);

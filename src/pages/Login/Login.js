import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import api from '../../services/api';

class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  inputChangedHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  loginSubmitHandler = async event => {
    event.preventDefault();

    try {
      const login = await api.post('/auth/login', {
        email: this.state.email,
        password: this.state.password
      });
      localStorage.setItem('jwt:', login.data.token);
      console.log(login.data);
      this.props.history.push('/protected');
    } catch (error) {
      console.log(error.data);
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.loginSubmitHandler}>
          <label>Email</label>{' '}
          <input
            type="email"
            name="email"
            onChange={this.inputChangedHandler}
            value={this.state.email}
          />
          <label>Password</label>{' '}
          <input
            type="password"
            name="password"
            onChange={this.inputChangedHandler}
            value={this.state.password}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);

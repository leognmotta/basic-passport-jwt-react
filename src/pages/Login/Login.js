import React, { Component } from 'react';
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

    const login = await api.post('/auth/login', {
      email: this.state.email,
      password: this.state.password
    });

    console.log(login);

    localStorage.setItem('jwt:', login.data.token);
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

export default Login;

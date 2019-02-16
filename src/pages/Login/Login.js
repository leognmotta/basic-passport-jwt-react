import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import Logo from '../../assets/airbnb-logo.svg';
import api from '../../services/api';
import { login } from '../../services/auth';

import { Form, Container } from './styles';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
    error: ''
  };

  loginSubmitHandler = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: 'Please fill all fields!' });
    } else {
      try {
        const response = await api.post('/auth/signin', { email, password });
        console.log(response.data.token);
        login(response.data.token);
        this.props.history.push('/');
      } catch (error) {
        const errorMessage = error.response.data.message;
        this.setState({ error: errorMessage });
      }
    }
  };

  inputChangedHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.loginSubmitHandler}>
          <img src={Logo} alt="Airbnb logo" />
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="email"
            name="email"
            value={this.state.email}
            placeholder="Endereço de e-mail"
            onChange={this.inputChangedHandler}
          />
          <input
            type="password"
            name="password"
            value={this.state.password}
            placeholder="Password"
            onChange={this.inputChangedHandler}
          />
          <button type="submit">Login</button>
          <hr />
          <Link to="/signup">Go to Sign Up</Link>
        </Form>
      </Container>
    );
  }
}

export default withRouter(SignIn);

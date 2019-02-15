import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import api from '../../services/api';

import Logo from '../../assets/airbnb-logo.svg';

import { Form, Container } from './styles';

class SignUp extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    error: ''
  };

  signUpSubmitHandler = async event => {
    event.preventDefault();

    const { name, email, password } = this.state;

    if (!name || !email || !password) {
      this.setState({ error: 'Please fill all fields!' });
    } else {
      try {
        await api.post('/auth/signup', { name, email, password });
        this.props.history.push('/login');
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
        <Form onSubmit={this.signUpSubmitHandler}>
          <img src={Logo} alt="Airbnb logo" />
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={this.inputChangedHandler}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={this.inputChangedHandler}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={this.inputChangedHandler}
          />
          <button type="submit">Sign Up</button>
          <hr />
          <Link to="/login">Go to login</Link>
        </Form>
      </Container>
    );
  }
}

export default withRouter(SignUp);

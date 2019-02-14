import React, { Component } from 'react';

class Protected extends Component {
  componentDidMount() {
    console.log(this.props.user);
  }
  render() {
    return <h1> I am protected</h1>;
  }
}

export default Protected;

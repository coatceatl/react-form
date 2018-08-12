import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state={
      email: ''
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('email value is ', this.state.email);
  }

  handleEmailChange(event) {
    console.log('email was changed', this);
    this.setState({email: event.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='email'
          placeholder='Email'
          value={this.state.email}
          onChange={this.handleEmailChange}
          required
        />
        <button>Send</button>
      </form>
    )
  }
}

export default Form


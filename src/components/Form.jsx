import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state={
      email: ''
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('form submitted');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          placeholder='Email'
          value={this.state.email}
        />
        <button>Send</button>
      </form>
    )
  }
}

export default Form


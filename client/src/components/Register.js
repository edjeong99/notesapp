import React, { Component } from 'react';
import axios from 'axios';
import gv from '../util/globalVariable';

const serverURL = gv.SERVER_PATH || 'http://localhost:9000/';

const initialUser = {
  username: '',
  password: ''
};

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { ...initialUser },
      message: ''
    };
  }

  inputHandler = event => {
    const { name, value } = event.target;
    this.setState({ user: { ...this.state.user, [name]: value } });
  };

  submitHandler = event => {
    event.preventDefault();
    console.log('in Register.js  this.state.user = ', this.state.user);
    console.log('in Register.js  path = ', `${serverURL}${gv.REGISTER_PATH}`);

    axios
      .post(`${serverURL}${gv.REGISTER_PATH}`, this.state.user)
      .then(res => {
        console.log('Register.js  res.userId = ', res.data.userId);
        if (res.status === 200) {
          this.setState({
            message: 'Registration successful',
            user: { ...initialUser }
          });

          // console.log('in Register.js SUCCESS`);
          localStorage.setItem('secret_token', res.data.token);
          this.props.handleLogin(res.data.userId);

          this.props.history.push('/');
        } else {
          throw new Error();
        }
      })
      .catch(err => {
        console.log('in Register.js  err = ', err);

        this.setState({
          message: 'Registration failed.',
          user: { ...initialUser }
        });
      });
  };

  render() {
    return (
      <div className='login'>
        <form onSubmit={this.submitHandler}>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            name='username'
            value={this.state.user.username}
            onChange={this.inputHandler}
          />
          <label htmlFor='password'>Password</label>
          <input
            type='text'
            id='password'
            name='password'
            value={this.state.user.password}
            onChange={this.inputHandler}
          />
          <button type='submit'>Submit</button>
        </form>
        {this.state.message ? <h4>{this.state.message}</h4> : undefined}
      </div>
    );
  }
}

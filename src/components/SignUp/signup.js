import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose"; // Used to organize higher-order components

import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";
import "../../assets/Signup.css";

const SignUp = () => (
  <div className='Signup-container'>
    <SignUpForm />
    <div className='SignupToSignin'>
      <h1>Sign In</h1>
      <p>Already have an account? Click the link below to sign in.</p>
      <button>Sign In</button>
    </div>
  </div>
);

const INITIAL_STATE = {
  username: "",
  email: "",
  password: "",
  passwordConfirm: "",
  error: null
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, password } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, password)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.DASHBOARD);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { username, email, password, passwordConfirm, error } = this.state;

    const isInvalid =
      password !== passwordConfirm ||
      password === "" ||
      email === "" ||
      username === "";

    return (
      <form className='Signup' onSubmit={this.onSubmit}>
        <h1>Fire and Ice</h1>
        <input
          className='Signup-username'
          name='username'
          value={username}
          onChange={this.onChange}
          type='text'
          placeholder='Full Name'
        />
        <input
          className='Signup-email'
          name='email'
          value={email}
          onChange={this.onChange}
          type='text'
          placeholder='Email Address'
        />
        <input
          className='Signup-pass'
          name='password'
          value={password}
          onChange={this.onChange}
          type='password'
          placeholder='Password'
        />
        <input
          className='Signup-passconfirm'
          name='passwordConfirm'
          value={passwordConfirm}
          onChange={this.onChange}
          type='password'
          placeholder='Confirm Password'
        />
        <button className='Signup-btn' disabled={isInvalid} type='submit'>
          Sign Up
        </button>
        <a href=''>Forgot Your Password?</a>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = compose(
  withRouter,
  withFirebase
)(SignUpFormBase);

export default SignUp;

export { SignUpForm, SignUpLink };

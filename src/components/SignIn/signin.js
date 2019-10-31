import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

import { SignUpLink } from "../SignUp";
import { PasswordForgetLink } from "../PasswordForget";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";
import "../../assets/Signin.css";

import { PasswordForgetForm } from "../PasswordForget";
import { withAuthorization } from "../Session";

const SignIn = () => (
  <div className='body-signup'>
    <div className='Signin-container'>
      <SignInForm />
      <PasswordForgetLink />
      <PasswordForgetForm />
      <div className='SigninToSignup'>
        <SignUpLink />
      </div>
    </div>
  </div>
);

const condition = authUser => !!authUser;

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
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
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <form className='Signin' onSubmit={this.onSubmit}>
        <h1>Log In</h1>
        <input
          className='Signin-email'
          name='email'
          value={email}
          onChange={this.onChange}
          type='text'
          placeholder='Email Address'
        />
        <input
          className='Signin-pass'
          name='password'
          value={password}
          onChange={this.onChange}
          type='password'
          placeholder='Password'
        />
        <button className='Signin-btn' disabled={isInvalid} type='submit'>
          Sign In
        </button>
        <a href='#'>Forgot Your Password?</a>

        {error && <p className='error-msg'>{error.message}</p>}
      </form>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase
)(SignInFormBase);

export default withAuthorization(condition)(SignIn);

export { SignInForm };

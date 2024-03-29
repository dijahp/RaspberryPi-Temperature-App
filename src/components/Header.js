import React, { Component } from "react";

import "../assets/Header.css";
import SignOutButton from "./SignOut/signout";
import firebase from "firebase";

class Header extends Component {
  state = { currentUser: null };

  componentDidMount() {
    this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
      let username = user.email.split("@", 1);
      username = username[0].charAt(0).toUpperCase() + username[0].slice(1);
      this.setState({
        loading: false,
        user: username,
      });


    });

  }

  componentWillUnmount() {
    this.authSubscription();
    let useremail = this.state.user;

    console.log(useremail);
  }

  render() {

    return (
      <div className='Header'>
        <h4>Welcome, {this.state.user}</h4>
        <SignOutButton />
      </div>
    );
  }
}

export default Header;

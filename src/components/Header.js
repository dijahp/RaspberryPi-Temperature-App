import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../assets/Header.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignOutButton from "./SignOut/signout";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Test_Name"
    };
  }
  render() {
    return (
      <div className='Header'>
        <h4>Welcome, {this.state.name}</h4>
        <SignOutButton />
      </div>
    );
  }
}

export default Header;

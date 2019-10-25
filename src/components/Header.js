import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../assets/Header.css";

class Header extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: "Test_Name"
    }
  }
  render() {
    return (
      <div className='Header'>
        <h2>Dashboard</h2>
        <h4>Welcome, {this.state.name}</h4>
      </div>
    );
  }
}

export default Header;

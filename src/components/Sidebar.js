import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../assets/Sidebar.css";

class Sidebar extends Component {
  render() {
    return (
      <div className='Sidebar-section'>
        <h1>Fire and Ice</h1>
        <nav>
          <div className='Nav-item'>
            <a href='#'>Dashboard</a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Sidebar;

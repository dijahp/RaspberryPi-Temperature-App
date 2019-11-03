import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../assets/Card.css";

class Card extends Component {
  render() {
    return (
      <div className='Card'>
        <div className='Card-items'>
          <img></img>
          <p>Current Temperature</p>
          <p>30&deg;</p>
        </div>
      </div>
    );
  }
}

export default Card;

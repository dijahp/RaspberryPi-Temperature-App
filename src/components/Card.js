import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../assets/Card.css";

class Card extends Component {
  render() {
    return (
      <div className='Card'>
        <div className='Card-card'>
          <i>H</i>
        </div>
        <div className='Card-items'>
          <p>
            Example of where current temp/humidity whatever can be placed and
            passed with props
          </p>
        </div>
      </div>
    );
  }
}

export default Card;

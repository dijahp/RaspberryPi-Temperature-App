import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../assets/Card.css";

class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { iconImg } = this.props;
    return (
      <div className='Card'>
        <div className='Card-items'>
          <div className='Card-img'>
            <img src={iconImg}></img>
          </div>
          <div className='Card-info'>
            <p className='Card-title'>Current Temperature</p>
            <p className='Card-data'>30&deg;</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;

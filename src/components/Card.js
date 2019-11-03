import React, { Component } from "react";

import "../assets/Card.css";

class Card extends Component {

  render() {
    const { iconImg, cardData, cardDesc } = this.props;
    return (
      <div className='Card'>
        <div className='Card-items'>
          <div className='Card-img'>
            <img src={iconImg} alt="Cards"></img>
          </div>
          <div className='Card-info'>
            <p className='Card-title'>{cardDesc}</p>
            <p className='Card-data'>{cardData}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;

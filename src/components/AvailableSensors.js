import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../assets/AvailableSensors.css";

class AvailableSensors extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log(e.target.textContent);
  }
  render() {
    const sensors = this.props.availableSensors;
  


    return (
      <div className='AvailableSensors'>
        <h3>Sensors currently activated:</h3>
        <ul>
          {sensors.map((sensor, index) => (
            <li onClick={e => this.handleClick(e)} key={index}>
              {sensor.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AvailableSensors;

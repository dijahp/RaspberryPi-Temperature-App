import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../assets/AvailableSensors.css";

class AvailableSensors extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const sensors = this.props.availableSensors;

    return (
      <div className='AvailableSensors'>
        <h3>Sensors currently activated:</h3>
        <ul>
          {sensors.map((sensor, index) => (
            <li key={index}>{sensor}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AvailableSensors;

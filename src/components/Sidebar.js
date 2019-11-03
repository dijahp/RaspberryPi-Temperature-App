import React, { Component } from "react";
import * as ROUTES from "../constants/routes"
import "../assets/Sidebar.css";

import { withFirebase } from './Firebase';
var sensors = [];

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {childVal:''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.handleSensor(event.target.value);
    this.setState({childVal: event.target.value});
  }


  render() {
    let initialSensor = this.props.selectedSensor;
    let sensorRef = this.props.firebase.fs.collection('sensorData').where("humidity", ">", 0).onSnapshot((querySnapshot) => {

      querySnapshot.forEach((doc) => {
        var newItem = doc.data().sensorKey;
        if (sensors.indexOf(newItem) === -1) {
          sensors.push(doc.data().sensorKey)
        }
      }) })
    
    var message='You selected '+initialSensor;
    return (
      <div className='Sidebar-section' >
        <h1>Fire and Ice</h1>
        <div id="Dropdownmenu">
          <h4>Sensors:</h4>
          <select value={this.state.childVal} onChange={this.handleChange} >
            {sensors.map((sensor, index) =>
              <option key={index} value={sensor}>{sensor}</option>
            )}

          </select>
          <p>{message}</p>
        </div>
      </div>
    );
  }
}

export default withFirebase(Sidebar);

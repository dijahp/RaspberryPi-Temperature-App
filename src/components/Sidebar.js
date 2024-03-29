import React, { Component } from "react";
import * as ROUTES from "../constants/routes"
import "../assets/Sidebar.css";
import rasp from '../assets/IMG/raspberry-pi.svg'

import { withFirebase } from './Firebase';
var sensors = [];
var sensorMap = [];

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childVal: '',
      friendlyName: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    var key = sensorMap.find(o => o.friendlyName === event.target.value);
    this.props.handleSensor(key["sensorKey"]);
    this.setState({ childVal: key["sensorKey"], friendlyName: key['friendlyName'] });
  }


  render() {
 
      let sensorRef = this.props.firebase.fs.collection('sensorMeta').limit(3).get()
      .then(querySnapshot => {
        querySnapshot.forEach((doc) => {
          var newItem = doc.data().friendlyName;
          var sensorKey = doc.data().sensorKey;
          if (sensors.indexOf(newItem) === -1) {
            sensors.push(doc.data().friendlyName);
            sensorMap.push({"friendlyName": newItem, "sensorKey": sensorKey});
          }
        }) });
      
    
    return (
      <div className='Sidebar-section' >
        <h1>Fire and Ice</h1>
        <div id="Dropdownmenu">
          <h4>Sensors:</h4>
          <select value={this.state.friendlyName} onChange={this.handleChange} >
            {sensors.map((sensor, index) =>
              <option key={index} value={sensor}>{sensor}</option>
            )}

          </select>
        </div>
        <div className="rasp-img-container">
          <img className="rasp-img" src={rasp} />
        </div>
      </div>
    );
  }
}

export default withFirebase(Sidebar);

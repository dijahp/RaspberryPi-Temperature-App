import React, { Component } from "react";
import * as ROUTES from "../constants/routes"
import "../assets/Sidebar.css";

import { withFirebase } from './Firebase';
var sensors = [];


class Sidebar extends Component {




  render() {

    let sensorRef = this.props.firebase.fs.collection('sensorData').where("humidity", ">", 0).onSnapshot((querySnapshot) => {

      querySnapshot.forEach((doc) => {
        var newItem = doc.data().sensorKey;
        if (sensors.indexOf(newItem) === -1) {
          sensors.push(doc.data().sensorKey)
        }
      })


    })



    return (
      <div className='Sidebar-section' >
        <h1>Fire and Ice</h1>
        <div id="Dropdownmenu">
          <h4>Sensors:</h4>
          <select>
            {sensors.map((sensor, index) =>
              <option key={index} value={sensor}>{sensor}</option>
            )}

          </select>
        </div>
      </div>
    );
  }
}

export default withFirebase(Sidebar);

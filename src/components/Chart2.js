import React, { Component } from "react";
import ReactDOM from "react-dom";
import sensorBarChart from "./Charts";
import "../assets/Chart2.css";

class Chart2 extends Component {
  render() {
    return (
      <div className="Chart2">
        <sensorBarChart />
      </div>
    );
  }
}

export default Chart2;

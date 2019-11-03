import React, { Component } from "react";

import LineChart from "./Charts/linechart";
import "../assets/Chart.css";

class Chart extends Component {
  constructor (props) {
    super(props);
    //this.selectedSensor = { selectedSensor: 'TEST' }
  }

  render() {
    //this.setState({selectedSensor: this.props.selectedSensor});

    return (
      <div className="Chart">
        <LineChart selectedSensor = {this.selectedSensor}/>
        <p>{this.props.selectedSensor}</p>
      </div>
    );
  }
}

export default Chart;

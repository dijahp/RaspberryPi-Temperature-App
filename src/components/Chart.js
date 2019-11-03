import React, { Component } from "react";

import LineChart from "./Charts/linechart";
import "../assets/Chart.css";

class Chart extends Component {
  render() {
    return (
      <div className="Chart">
        <LineChart />
      </div>
    );
  }
}

export default Chart;

import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../assets/Chart2.css";
import BarChartComp from "./Charts/barchart.js";

class Chart2 extends Component {
  render() {
    return <div className='Chart2'>
          <BarChartComp />
    </div>;
  }
}

export default Chart2;

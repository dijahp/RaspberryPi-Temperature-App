import React from "react";
import { GEOMS } from "react-d3-ggplot";
import { XAxis } from "react-d3-ggplot";
import { YAxis } from "react-d3-ggplot";
import { Line } from "react-d3-ggplot";
import { tsla } from "./data";

import { fs } from "../Firebase/firebase";

const initData = tsla.chart.map(day => ({
  ...day,
  date: new Date(day.date)
}));

console.log("INITDATA: ", initData);


class LineChart extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      lineData: [],
      aes: ["date", "close"],
      dimensions: { width: window.innerWidth, height: 400, padding: 50 }
    };
  }

  componentDidMount () {
    const data = tsla.chart.map(day => ({
      ...day,
      date: new Date(day.date)
    }));

    this.setState({ lineData: data });
    //tsla.chart.map(day => console.log(day))
    console.log("DATA: ", data);
  }


  render ()  {return <LineComp data={this.state} /> }    
  }


function LineComp (props) {
  return (
    <div className="card">
    <GEOMS data={props.lineData} aes={props.aes} dimensions={props.dimensions}>
      <XAxis />
      <YAxis />
      <Line />
    </GEOMS>
  </div>
  )
};

export default LineChart;

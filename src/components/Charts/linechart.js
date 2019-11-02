import React from "react";
import { GEOMS } from "react-d3-ggplot";
import { XAxis } from "react-d3-ggplot";
import { YAxis } from "react-d3-ggplot";
import { Line } from "react-d3-ggplot";
import { tsla } from "./data";

import Firebase from '../Firebase/firebase';
const db = Firebase.fs();

class LineChart extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      lineData: [{date: new Date("2019-05-22T10:18:08-04:00"), close: 204.53},
      {date: new Date("2019-05-22T10:18:08-04:00"), close: 204.53}],
      aes: ["date", "close"],
      dimensions: { width: window.innerWidth, height: 400, padding: 50 }
    };
  }

  sensorData = event => {
    this.props.firebase.sensorData();
  }

  componentDidMount () {
    //sample data coming from components/data.js
    const data = tsla.chart.map(day => ({
      ...day,
      date: new Date(day.date)
    }));

  
    //querying firestore
    db.collection("sensorData")
    .get()
    .then(querySnapshot => {
      const data = querySnapshot.docs.map(doc => doc.data());
      console.log("FIRESTORE: ", data);
      //this.setState({ users: data });
    });

    this.setState({ lineData: data });

  }


  render () {
    const {lineData, aes, dimensions} = this.state;
    return (
      <div className="card">
      <GEOMS data={lineData} aes={aes} dimensions={dimensions}>
        <XAxis />
        <YAxis />
        <Line />
      </GEOMS>
    </div>
    )
  }
}

export default LineChart;

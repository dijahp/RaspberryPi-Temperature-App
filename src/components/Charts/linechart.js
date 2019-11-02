import React from "react";
import { GEOMS } from "react-d3-ggplot";
import { XAxis } from "react-d3-ggplot";
import { YAxis } from "react-d3-ggplot";
import { Line } from "react-d3-ggplot";
import { withFirebase } from "../Firebase";

class LineChart extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      lineData: [{date: new Date("2019-05-22T10:18:08-04:00"), humidity: .53},
      {date: new Date("2019-05-22T10:18:08-04:00"), humidity: .53}],
      aes: ["date", "humidity"],
      dimensions: { width: window.innerWidth, height: 400, padding: 50 }
    };
  }

  componentDidMount () {
    //querying firestore with onSnapshot() listener
    //UPDATE THIS TO SHOW WHICHEVER SENSOR IS SELECTED
    //CURRENTLY SHOWING SENSOR1/mySecret1
    let sensorRef = this.props.firebase.fs.collection('sensorData');
    sensorRef.where("sensorKey", "==", "mySecret1")
    .orderBy('timestamp')
    .onSnapshot((querySnapshot) => {
      const data = querySnapshot.docs.map(doc => ({
        date: (doc.data().timestamp.toDate()),
        humidity: doc.data().humidity
      }));
      this.setState({ lineData: data });
    })

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

export default withFirebase(LineChart);

import React, { Component } from "react";
import { GEOMS } from "react-d3-ggplot";
import { XAxis } from "react-d3-ggplot";
import { YAxis } from "react-d3-ggplot";
import { Line } from "react-d3-ggplot";
import "../assets/Chart.css";
import { withFirebase } from "../components/Firebase";


class Chart extends Component {
  constructor (props) {
    super(props);
    this.state = {
      lineData: [{ date: new Date("2019-05-22T10:18:08-04:00"), temperature: 53 },
      { date: new Date("2019-05-22T10:18:08-04:00"), temperature: 53 }],
      aes: ["date", "temperature"],
      dimensions: { width: window.innerWidth, height: 350, padding: 50 }
    };
  }

  componentDidMount() {
    //querying firestore with get()
    let sensorRef = this.props.firebase.fs.collection('sensorData');
    sensorRef.where("sensorKey", "==", this.props.selectedSensor)
      .orderBy('timestamp')
      .limit(25)
      .get().then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => ({
          date: (doc.data().timestamp.toDate()),
          temperature: (doc.data().temp * (9 / 5) + 32),
        }));
        this.setState({ lineData: data });
      })

      let unsub = this.props.firebase.fs.collection('sensorData').onSnapshot(() => {
      });

      // Stop listening for changes
      unsub();
  }

  componentDidUpdate() {
    //querying firestore with get()
    let sensorRef = this.props.firebase.fs.collection('sensorData');
    sensorRef.where("sensorKey", "==", this.props.selectedSensor)
      .orderBy('timestamp')
      .limit(25)
      .get().then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => ({
          date: (doc.data().timestamp.toDate()),
          temperature: (doc.data().temp * (9 / 5) + 32)
        }));
        this.setState({ lineData: data });
      });

      // [START detach_listener]
      let unsub = this.props.firebase.fs.collection('sensorData').onSnapshot(() => {
      });

      // Stop listening for changes
      unsub();
  }

  render() {
    const { lineData, aes, dimensions } = this.state;
    return (
      <div className="Chart">
        {/* <h className="chartTitle">Temperature</h> */}
        <p className="Card-title">Temperature</p>
          <GEOMS data={lineData} aes={aes} dimensions={dimensions}>
            <XAxis />
            <YAxis />
            <Line />
          </GEOMS>
      </div>
    );
  }
}

export default withFirebase(Chart);

import React, { Component } from "react";

import "../assets/Dashboard.css";
import Header from "./Header";
import Chart from "./Chart";
import { withFirebase } from './Firebase';
import Card from "./Card";

import Sidebar from "./Sidebar";
import Thermo from "../assets/IMG/temperature.svg";
import Humid from "../assets/IMG/humidity.svg";
import Pin from '../assets/IMG/pin.svg';
import Calendar from "../assets/IMG/calendar.svg";
import Chart2 from "./Chart2";

const date = new Date();
const today = date.getMonth() + 1 + "/" + date.getDate();

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AvailableSensors: [
        {
          name: "testsensor",
          location: "Atlanta, GA"
        },
        {
          name: "testsensor2",
          location: "Dallas, Texas"
        }
      ],
      currentTemp: 30,
      currentHumidity: 43
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      AvailableSensors: [
        ...this.state.AvailableSensors,
        { [e.target.name]: e.target.value }
      ]
    });
  }

  componentDidMount () {
    //querying firestore with onSnapshot() listener
    //UPDATE THIS TO SHOW WHICHEVER SENSOR IS SELECTED
    //CURRENTLY SHOWING SENSOR1/mySecret1
    let sensorRef = this.props.firebase.fs.collection('sensorData');
    sensorRef.where("sensorKey", "==", "mySecret1")
    .orderBy('timestamp')
    .onSnapshot((querySnapshot) => {
      const humidArray = querySnapshot.docs.map(doc => (doc.data().humidity));
      let humidSum = humidArray.reduce((previous, current) => current += previous);
      const humidAve = humidSum / humidArray.length;

      const tempArray = querySnapshot.docs.map(doc => (doc.data().temp));
      let tempSum = tempArray.reduce((previous, current) => current += previous);
      const tempAve = tempSum / tempArray.length;

      this.setState({ currentTemp: tempAve.toFixed(2), 
        currentHumidity: humidAve.toFixed(2)  });
    })

  };

  render() {
    return (
      <div className='Dashboard-container'>
        <div className='Sidebar'>
          <Sidebar />
        </div>
        <div className='Dashboard'>
          <Header />

          <div className='Card-section'>
            <Card
              iconImg={Thermo}
              cardDesc='Current Temperature'
              cardData={this.state.currentTemp}
              //'30ºF'
            />
            <Card iconImg={Humid} cardDesc='Humidity' cardData={this.state.currentHumidity} />
            <Card iconImg={Pin} cardDesc='Location' cardData='Atlanta' />
            <Card iconImg={Calendar} cardDesc='Date' cardData={today} />
          </div>
          <div className='Chart-section'>
            <Chart />
            <Chart2 />
          </div>
        </div>
      </div>
    );
  }
}

export default withFirebase(Dashboard);

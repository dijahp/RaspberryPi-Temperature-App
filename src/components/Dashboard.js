import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../assets/Dashboard.css";
import Header from "./Header";
import Chart from "./Chart";

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
      ]
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
              cardData='30ºF'
            />
            <Card iconImg={Humid} cardDesc='Humidity' cardData='43%' />
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

export default Dashboard;

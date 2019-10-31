import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../assets/Dashboard.css";
import Header from "./Header";
import Chart from "./Chart";
import Form from "./Form";
import Card from "./Card";
import FormContainer from "./FormContainer";
import Sidebar from "./Sidebar";
import Thermo from "../assets/IMG/temperature.svg";
import Humid from "../assets/IMG/humidity.svg";
import Pressure from "../assets/IMG/pressure.svg";
import Calendar from "../assets/IMG/calendar.svg";

import Chart2 from "./Chart2";

const date = new Date();
const today = date.getMonth() + 1 + "/" + date.getDate();

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {

      AvailableSensors: [{
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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit() {
    alert("test");
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
            <Card iconImg={Pressure} cardDesc='Pressure' cardData='14.55' />
            <Card iconImg={Calendar} cardDesc='Date' cardData={today} />
          </div>
          <div className='Chart-section'>
            <Chart />
          </div>
          <div className='Dashboard-middle'>
            <div className='Middle-left'>
              <Chart2 />
            </div>
            <div className='Middle-right'>
              <div className='Form-container'>
                <FormContainer availableSensors={this.state.AvailableSensors} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;

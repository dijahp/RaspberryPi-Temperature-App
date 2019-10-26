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

class Dashboard extends Component {
  render() {
    return (
      <div className='Dashboard-container'>
        <div className='Sidebar'>
          <Sidebar />
        </div>
        <div className='Dashboard'>
          <Header />

          <div className='Card-section'>
            <Card iconImg={Thermo} />
            <Card />
            <Card />
            <Card />
          </div>
          <div className='Chart-section'>
            <Chart />
          </div>
          <div className='Dashboard-middle'>
            <div className='Middle-left'></div>
            <div className='Middle-right'>
              <div className='Form-container'>
                <FormContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;

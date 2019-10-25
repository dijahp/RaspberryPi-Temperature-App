import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../assets/Dashboard.css";
import Header from "./Header";
import Chart from "./Chart";
import Form from "./Form";
import Card from "./Card";
import FormContainer from './FormContainer'

class Dashboard extends Component {
  render() {
    return (
      <div className='Dashboard'>
        <Header />
        <div className='Chart-section'>
          <Chart />
        </div>
        <div className='Dashboard-middle'>
          <div className='Middle-left'>
            <Card />
            <Card />
          </div>
          <div className='Middle-right'>
            <div className="Form-container">
            <FormContainer />
            </div>

          </div>

        </div>
        <Chart />
      </div>
    );
  }
}

export default Dashboard;

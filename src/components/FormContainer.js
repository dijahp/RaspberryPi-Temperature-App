import React, { Component } from "react";
import ReactDOM from "react-dom";
import Form from "./Form";
import AvailableSensors from "./AvailableSensors";
import "../assets/FormContainer.css";

class FormContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='FormContainer'>
        <Form />
        <AvailableSensors availableSensors={this.props.availableSensors} handleInputChange={this.props.handleInputChange}/>
      </div>
    );
  }
}

export default FormContainer;

import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../assets/Form.css";

class Form extends Component {
  render() {
    return (
      <div className='Form'>
        <form className='Form-Form'>
          <div className='sensor input'>
            <label>Sensor:</label>
            <input></input>
          </div>
          <div className='location input'>
            <label>Location:</label>
            <input></input>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;

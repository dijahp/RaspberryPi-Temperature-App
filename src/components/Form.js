import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../assets/Form.css";

class Form extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    alert("test");
  }

  render() {
    return (
      <div className='Form'>
        <form className='Form-Form' onSubmit={this.handleSubmit}>
          <div className='Forminput-container'>
            <div className='sensor'>
              <label>Sensor:</label>

              <input name='sensor' onChange={this.handleInputChange}></input>
            </div>
            <div className='location '>
              <label>City, State:</label>
              <input name='location' onChange={this.handleInputChange}></input>
            </div>
          </div>
          <button type='submit' className='submit'>
            Add Sensor
          </button>
        </form>
      </div>
    );
  }
}

export default Form;

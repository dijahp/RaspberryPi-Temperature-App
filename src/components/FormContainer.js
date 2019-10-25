import React, { Component } from "react";
import ReactDOM from "react-dom";
import Form from './Form';
import AvailableSensors from './AvailableSensors';
import '../assets/FormContainer.css'

class FormContainer extends Component{
render(){
    return <div className="FormContainer">
        <Form/>
        <AvailableSensors/>
    </div>
}
}

export default FormContainer;
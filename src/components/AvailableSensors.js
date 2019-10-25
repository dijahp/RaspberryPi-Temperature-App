import React, { Component } from "react";
import ReactDOM from "react-dom";
import '../assets/AvailableSensors.css'

class AvailableSensors extends Component {
    constructor(props){
        super(props);
        this.state = {
            AvailableSensors: ["testsensor", "testsensor2"]
        }
    }
    render(){
        return (
            <div className="AvailableSensors">
                <h3>Sensors currently activated:</h3>
                <ul>
                {this.state.AvailableSensors.map((sensor, index) => (
                    <li key={index}>{sensor}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default AvailableSensors;
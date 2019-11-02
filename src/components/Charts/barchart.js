import React from 'react';
import BarChart from 'react-bar-chart';
import { withFirebase } from '../Firebase';

const margin = {top: 20, right: 20, bottom: 30, left: 40};
 
class BarChartComp extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
          width: 500,
          tempData: [
            {text: 'Sensor1', value: 500}, 
            {text: 'Sensor2', value: 300} 
          ]
        };
      }
    componentDidMount () {
        window.onresize = () => {
            this.setState({width: this.refs.root.offsetWidth}); 
        };

        //find sensor 1 average temperature
        let sensorRef1 = this.props.firebase.fs.collection('sensorData');
        sensorRef1.where("sensorKey", "==", "mySecret1")
        .onSnapshot((querySnapshot) => {
            //query for sensor 1
            const sensor1Temp = querySnapshot.docs.map(doc => (doc.data().temp) );
            let sum1 = sensor1Temp.reduce((previous, current) => current += previous);
            let avg1 = sum1 / sensor1Temp.length;

            //update state of temp1
            const index1 = this.state.tempData.findIndex(sensor => sensor.text === "Sensor1"),
            tempData1 = [...this.state.tempData] // important to create a copy, otherwise you'll modify state outside of setState call
            tempData1[index1] = {text: 'Sensor1', value: avg1};
            this.setState({tempData: tempData1}); 
         } );

         //find sensor 2 average temperature
        let sensorRef2 = this.props.firebase.fs.collection('sensorData');
        sensorRef2.where("sensorKey", "==", "mySecret2")
        .onSnapshot((querySnapshot) => {
            //query for sensor 2
            const sensor2Temp = querySnapshot.docs.map(doc => (doc.data().temp) );
            let sum2 = sensor2Temp.reduce((previous, current) => current += previous);
            let avg2 = sum2 / sensor2Temp.length;

            //update state of temp2
            const index2 = this.state.tempData.findIndex(sensor => sensor.text === "Sensor2"),
            tempData2 = [...this.state.tempData] // important to create a copy, otherwise you'll modify state outside of setState call
            tempData2[index2] = {text: 'Sensor2', value: avg2};
            this.setState({tempData: tempData2});           
        } );
    
}

    render() {
        const {tempData} = this.state;
        return (
            <div ref='root'>
                <div style={{width: '50%'}}> 
                    <BarChart ylabel='Average Temperature'
                      width={this.state.width}
                      height={500}
                      margin={margin}
                      data={tempData}
                      onBarClick={this.handleBarClick}/>
                </div>
            </div>
        )
    };    
};

export default withFirebase(BarChartComp);
# Fire and Ice with a Slice of Raspberry Pi &nbsp; &nbsp; <img src="./src/assets/IMG/raspberry-pi.svg" width="60" height="60" />


The "Fire and Ice" application provides a dashboard with user authentication for monitoring different environmental conditions with Raspberry Pi devices. You can set up a \$35 Raspberry Pi device in any room (or even set up multiple devices!) and keep track of each room's temperature and humidity, or other environmental factors depending on the sensors you have to connect to your Pi. The dashboard shows you both metrics over time and a snapshot average. Easily switch between sensors, so you can compare different rooms, and track your space's environment in real time!

&nbsp;


## Getting Started

1. Clone this repository:
    ``` 
    git clone https://dijahp/RaspberryPi-Temperature-App 
    ```

2. Run the following commands in your terminal:
   ```
   npm install
   ```
   ```
   npm start
   ```
 &nbsp;
 
## Prerequisites & Suggestions

- Text/code editor (we highly recommend Visual Studio Code!)
- Node.js installation
- Basic working knowledge of JavaScript & React

&nbsp;

## Built With

- [Firebase User Authentication](https://firebase.google.com/products/auth/) - User authentication
- [Firebase Cloud Firestore](https://firebase.google.com/products/firestore/) - Project database/data store
- [Raspberry Pi Model 4 B](https://www.raspberrypi.org/products/raspberry-pi-4-model-b/) - Raspberry Pi Hardware
- [DHT22](https://smile.amazon.com/gp/product/B07H2RP26F/ref=ppx_yo_dt_b_asin_title_o02_s00?ie=UTF8&psc=1) - Temperature/humidity sensor
- [React-Router-DOM](https://reacttraining.com/react-router/web/guides/quick-start) - Used for routes inside of React code
- [Create-React-App](https://github.com/facebook/create-react-app) - React boilerplate for quick setup of a React project
- [Express](https://expressjs.com/) - Web framework for Node.js
- [react d3 ggplot](https://www.npmjs.com/package/react-d3-ggplot) - Data visualizations
- [Recompose](https://recompose.docsforhumans.com/) - Utility for pipelining higher order components in React

&nbsp;

## Supporting Repositories

- [RaspberryPi-Temperature-Sensor](https://github.com/alankleindev/RaspberryPi-Temperature-Sensor) - Raspberry Pi Sensor Code for DigitalCrafts fire-and-ice Project
- [RaspberryPi-Temperature-Express](https://github.com/alankleindev/RaspberryPi-Temperature-Express) - REST API To Consume Raspberry Pi Sensor Data and Publish to Cloud Firestore

&nbsp;

## Authors

- [**Sherri Booher**](https://github.com/sherribooher)
- [**Alan Klein**](https://github.com/alankleindev)
- [**Samhita Noone**](https://www.linkedin.com/in/samhitanoone/)
- [**Khadijah Parks**](https://github.com/dijahp)

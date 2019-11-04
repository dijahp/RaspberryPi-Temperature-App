const path = require("path");
const express = require("express");
const helmet = require("helmet");
const app = express();
const env = require("dotenv").config({ path: '../.env' });

const firebase = require("firebase");
//require("firebase/firestore");

firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
});

var db = firebase.firestore();

// db.collection("sensors").get()
// .then(function(querySnapshot) {
//   querySnapshot.forEach(function(doc) {
//       // doc.data() is never undefined for query doc snapshots
//       console.log(doc.id, " => ", doc.data());
//   });
// })
// .catch(function(error) {
//   console.log("Error getting documents: ", error);
// });


app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'build')))

app.use((req, res, next) => {
  if (!req.header("X-Auth-Token")) {
    return res.status(403).json({ error: "No auth token sent!" });
  }
  next();
});

// handle a POST request to consume raspi sensor data
app.post("/sensor", (req, res, next) => {
  console.log(req.body)
  //database code
  var sensorRef = db.collection('sensorData');

  //function to query database for the auth token
  var checkAuth = db.collection('sensorMeta')
    .where("sensorKey", "==", req.header("X-Auth-Token"))
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());
      });
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });

  //function to push sensor data to the sensorData document
  var setWithMerge = sensorRef.add({
    sensorKey: req.header("X-Auth-Token"),
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    temp: req.body.temperature,
    humidity: req.body.humidity
  }).then(ref => {
    //console.log('Added document with ID: ', ref.id);
  });

  // Verify the auth token
  if (checkAuth) {
    console.log(req.body.temperature);
    console.log(req.body.humidity);
    res.status(200).json({ message: "success" });
    return setWithMerge;
  } else {
    res.status(500).json({ error: "invalid auth token!" });
  }
});

app.listen(process.env.PORT || 8080);
console.log("Server listening on port 8080...");



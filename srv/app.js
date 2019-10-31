const path = require("path");
const express = require("express");
const helmet = require("helmet");

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  if (!req.header("X-Auth-Token")) {
    return res.status(403).json({ error: "No auth token sent!" });
  }
  next();
});

// handle a POST request to consume raspi sensor data
app.post("/sensor", (req, res, next) => {
  // Verify the auth token

  if (req.header("X-Auth-Token") === "mySecret") {
    console.log(req.body.temperature);
    console.log(req.body.humidity);
    res.status(200).json({ message: "success" });
    return;
  } else {
    res.status(500).json({ error: "invalid auth token!" });
  }
});

app.listen(process.env.PORT || 8080);
console.log("Server listening on port 8080...");

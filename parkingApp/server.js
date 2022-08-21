const express = require("express");
const shortid = require("shortid");
const { getBySomething, createParking, delate, getAll } = require("./utils");
const PORT = 3000;
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser")

app.use(bodyParser.json())
app.use(cors());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

//Endpoints

app.get("/api/parking/:id", (req, res) => {
  // const parkingId = req.params.id;
  // const parkings = getAll();
  // requestedParking = parkings.find((parking) => parking.id === parkingId);

  // 

  debugger
  const parkingId = req.params.id;
  const requestedParking = getBySomething('*', 'id=', parkingId);

  if (!requestedParking) {
    res.status(404).send(`parking ${parkingId} not found`);
  } else {
    res.send(requestedParking);
  }
});

app.get("/api/parking", async (req, res) => {
  const parkings = await getAll();
  console.log(parkings.rows);
  if (!parkings || !parkings.rows) {
    console.error(`there are ziro parkings`);
  } else {
    res.send(parkings.rows);
  }
});

//  Create
app.post("/api/parking", (req, res) => {
  //const parkings = getParkings();
  console.log(req.body);
  const newParking = {
    id: shortid.generate(),
    x_coord: req.body.x_coord,
    y_coord: req.body.y_coord,
    address: req.body.address,
    time: Date.now()
  }
  console.log(newParking);


  //parkings.push(newParking);
  updateParkings(parkings);
  res.send(newParking);
});

app.put("/api/parking", (req, res) => {
  const id = req.body.id
  const parkings = getParkings();
  let updatedParkings = parkings.map(parking => parking.id === id ? req.body : parking)
  updateParkings(updatedParkings);
  res.send(req.body);
});



//Delete
app.delete("/api/parking/:id", (req, res) => {
  const parkingId = req.params.id;
  const parkings = getParkings();

  //findIndex+splice
  const indexToRemove = parkings.findIndex((parking) => parking.id === parkingId);
  if (indexToRemove === -1) {
    res.status(404).send("Parking not found. Deletion failed.");
  } else {
    parkings.splice(indexToRemove, 1);
    updateParkings(parkings);
    res.send(`Parking ${parkingId} has been deleted`);
  }
  //filter

  const updatedParkings = parkings.filter((parking) => parking.id !== parkingId);
  if (updateParkings.length === parkings.length) {
    res.status(404).send("Parking not found. Deletion failed.");
  } else {
    updateParkings(updatedParkings);
    res.send(`Parking ${parkingId} has been deleted`);
  }
});

app.listen(PORT, function (err) {
  if (err) {
    console.log("Error in server setup");
  }
  console.log("Server listening on Port", PORT);
});



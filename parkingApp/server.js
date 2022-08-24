const express = require("express");
const { getById, create, remove, getAll } = require("./utils");
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

app.get("/api/parking/:id", async (req, res) => {
  // const parkingId = req.params.id;
  // const parkings = getAll();
  // requestedParking = parkings.find((parking) => parking.id === parkingId);

  // 

  const parkingId = req.params.id;

  const requestedParking = await getById(parkingId);
  console.log(requestedParking.rows);

  if (!requestedParking) {
    console.error(`parking ${parkingId} not found`);
  } else {
    res.send(requestedParking.rows[0]);
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
app.post("/api/parking", async (req, res) => {
  //const parkings = getParkings();
  console.log("req body ", req.body);
  console.log("x_coord ", req.body.x_coord);
  console.log("y_coord ", req.body.y_coord);
  console.log("address ", req.body.address);

  const newParking = {
    id: Math.floor(Math.random() * 100000000),
    x_coord: req.body.x_coord,
    y_coord: req.body.y_coord,
    address: req.body.address,
    time: Date.now(),
  };
  console.log("new parking ", newParking);


  //parkings.push(newParking);
  create(newParking);
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
app.delete("/api/parking/:id", async (req, res) => {

  const parkingId = req.params.id;
  await remove(parkingId);
});

app.listen(PORT, function (err) {
  if (err) {
    console.log("Error in server setup");
  }
  console.log("Server listening on Port", PORT);
});



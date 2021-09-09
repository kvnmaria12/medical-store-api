const express = require("express");
const medicineRouter = require("./medicine");
// Creating a copy of express
const app = express();
// creating a middleware to mount the router object
app.use("/medicine", medicineRouter);
// export the app object
module.exports = app;
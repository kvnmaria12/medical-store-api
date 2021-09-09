const express = require("express");
const medicineRouter = require("./medicine");

const app = express();
// mounting the router object with the app object
app.use("/medicine", medicineRouter);
// exporting the app object
module.exports = app;
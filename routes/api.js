const express = require("express");
const medicineRouter = require("./medicine");
// creating an instance of express app
const app = express();
// middleware for the mounting the router object
app.use("/medicine", medicineRouter);
// exporting the app object
module.exports = app;
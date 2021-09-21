const express = require("express");
const medicineRouter = require("./medicine");

const app = express();

app.use("/medicine", medicineRouter);

module.exports = app;
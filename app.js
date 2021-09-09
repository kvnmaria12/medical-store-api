const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { databaseConnection } = require("./database");

// creating a instance of express app
const app = express();
// middleware for json
app.use(express.json());
// middleware for urlencoded
app.use(express.urlencoded({ extended: true }));
// middleware for cors 
app.use(cors());
// configuring the dotenv file
dotenv.config();
// calling the databaseConnection
databaseConnection();

// middleware for the medicine route
// app.use("/api",)


// creating a PORT
const PORT = process.env.PORT || 1212;

// listening to all the incoming request
app.listen(PORT, (err) => {
    // if error return 
    if (err) return console.log(err.message);
    console.log(`Server Started Listening at PORT ${PORT}`);
});
const express = require("express");
const cors = require("cors");
const { databaseConnection } = require("./database");
const dotenv = require("dotenv");

const app = express();

// adding the cors middleware
app.use(cors());

// middleware for json
app.use(express.json());

// middleware for urlextended
app.use(express.urlencoded({ extended: true }));

// calling the database function
databaseConnection();

// configuring the dotenv
dotenv.config();

// PORT 
const PORT = process.env.PORT;


app.listen(PORT, (err) => {

    if (err) return console.log(err.message);

    console.log(`Server Started Listening at PORT ${PORT}`);
});



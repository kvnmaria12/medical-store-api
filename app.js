const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const apiResponse = require("./helpers/apiResponse");
const medicine = require("./routes/api");
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
app.use("/api", medicine);
// Not Found response for unknown endpoint
app.all("*", (req, res) => {
    return apiResponse.notFoundResponse(res, "Not Found");
});
// middleware to check for each and every request for unauthorizedError
app.use((err, req, res) => {
    if (err.name === 'UnauthorizedError') {
        return apiResponse.unauthorizedError(res, "UnauthorizedError");
    }
});

// creating a PORT
const PORT = process.env.PORT || 1212;
// listening to all the incoming request
app.listen(PORT, (err) => {
    // if error return the error message 
    if (err) return console.log(err.message);
    console.log(`Server Started Listening at PORT ${PORT}`);
});
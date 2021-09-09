const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { databaseConnection } = require("./database");
const apiResponse = require("./helpers/apiResponse");
const medicine = require("./routes/api");

// creating a express app
const app = express();
// middleware for cors(cross origin resource sharing)
app.use(cors());
// middleware for json
app.use(express.json());
// middleware for urlextended
app.use(express.urlencoded({ extended: true }));
// calling the database function
databaseConnection();
// configuring the dotenv
dotenv.config();

// middleware for the medicine route
app.use("/api", medicine);

// Creating a PORT
const PORT = process.env.PORT || 1212;

// Not Found response from the unknown endpoint
app.all("*", (req, res) => {
    return apiResponse.notFoundResponse(res, "Page Not Found");
});

// Creating a middleware for every request to check for unauthorizedError
app.use((err, req, res) => {
    if (err.name === "UnauthorizedError") {
        return apiResponse.unauthorizedError(res, err.message);
    }
})

//listening to the incoming request
app.listen(PORT, (err) => {
    if (err) return console.log(err.message);
    console.log(`Server Started Listening at PORT ${PORT}`);
});



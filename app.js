const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { databaseConnection, con } = require("./database");
const medicine = require("./routes/api");

// create a copy of express app
const app = express();
// middleware for cors
app.use(cors());
// middleware for json
app.use(express.json());
// middleware for urlencoded
app.use(express.urlencoded({ extended: true }));
// calling the databaseConnection Function
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

// listening for incoming request
app.listen(PORT, (err) => {
    // if any error then just return 
    if (err) return console.log(err.message);
    console.log(`Server Started Listening at PORT ${PORT}`);
});



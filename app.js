const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const apiResponse = require("./helpers/apiResponse");
const medicine = require("./routes/api");
const { databaseConnection } = require("./database");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
dotenv.config();

databaseConnection();

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


const PORT = process.env.PORT || 1212;

app.listen(PORT, (err) => {
    if (err) return console.log(err.message);
    console.log(`Server Started Listening at PORT ${PORT}`);
});
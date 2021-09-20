const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { databaseConnection, con } = require("./database");
const medicine = require("./routes/api");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();

databaseConnection();

app.use("/api", medicine);

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

const PORT = process.env.PORT || 1212;
app.listen(PORT, (err) => {
    if (err) return console.log(err.message);
    console.log(`Server Started Listening at PORT ${PORT}`);
});



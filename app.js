const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { databaseConnection } = require("./database");
const apiResponse = require("./helpers/apiResponse");
const medicine = require("./routes/api");

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

databaseConnection();

app.use("/api", medicine);

app.all("*", (req, res) => {
    return apiResponse.notFoundResponse(res, "Page Not Found");
});

app.use((err, req, res) => {
    if (err.name === "UnauthorizedError") {
        return apiResponse.unauthorizedError(res, err.message);
    }
})

const PORT = process.env.PORT || 1212;
//listening to the incoming request
app.listen(PORT, (err) => {
    if (err) return console.log(err.message);
    console.log(`Server Started Listening at PORT ${PORT}`);
});



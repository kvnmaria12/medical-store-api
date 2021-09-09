const mysql = require("mysql");
const dotenv = require("dotenv");

// configuring the dotenv file
dotenv.config();

// Creating a mysql database connection
const con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

// Creating a promise for the databaseConnection
function databaseConnection() {
    return new Promise((resolve, reject) => {
        // connecting to the database
        con.connect(err => {
            // if connection is successful
            if (!err) {
                resolve(true);
            } else {
                reject(err.message);
            }
        });
    });
}

// exporting the databaseConnection function and the con object
module.exports = {
    databaseConnection,
    con
}
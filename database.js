const mysql = require("mysql");
const dotenv = require("dotenv");

// configuring the dotenv file
dotenv.config();
// creating a mysql databaseConnection
const con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});
// creating a promise to connect to the mysql database
function databaseConnection() {
    return new Promise((resolve, reject) => {
        // connecting
        con.connect(err => {
            // if successfully connected
            if (!err) {
                resolve(true);
            } else {
                reject(err.message);
            }
        });
    });
}

// exporting the databaseConnection promise and the con object
module.exports = {
    databaseConnection,
    con
}
const mysql = require("mysql");
const dotenv = require("dotenv");

// configuring the dotenv
dotenv.config();

// creating a mysql connection
const con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

// creating a promise for the connecting to the database
function databaseConnection() {
    return new Promise((resolve, reject) => {

        con.connect(err => {
            if (!err) {
                resolve(true)
            } else {
                reject(err.message)
            }
        });

    });
}

// exporting the databaseConnection and the con object
module.exports = {
    databaseConnection,
    con
}

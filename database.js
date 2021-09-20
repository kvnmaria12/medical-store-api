const mysql = require("mysql");
const dotenv = require("dotenv");


dotenv.config();

const con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

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

module.exports = {
    databaseConnection,
    con
}

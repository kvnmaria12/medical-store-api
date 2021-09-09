const apiResponse = require("../helpers/apiResponse");
const { con } = require("../database");


exports.fetchMedicineDataWithId =
    [
        // router handler function
        (req, res) => {

            try {
                const id = req.params.id;
                // SQL Query for fetching the data from the database
                const sqlQuery = `SELECT * FROM medicine WHERE id = '${id}'`;
                // getting the medicine data from the mysql database
                con.query(sqlQuery, (err, dbData) => {
                    // if error return an apiResponse as serverSide Error
                    if (err) return apiResponse.serverSideError(res, "Server Side Error");
                    return apiResponse.successResponseWithData(res, "Success", dbData);
                })
            } catch (error) {
                return apiResponse.serverSideError(res, "Server Side Error");
            }
        }
    ];

// To fetch all the data from the database
exports.fetchAllMedicineData =
    [
        // route handler function
        (req, res) => {

            try {
                // SQL Query for fetching all the data from the database
                const sqlQuery = `SELECT * FROM medicine`;
                // getting the medicine data from the mysql database
                con.query(sqlQuery, (err, dbData) => {
                    // if error return an apiResponse as serverSide Error
                    if (err) return apiResponse.serverSideError(res, "Server Side Error");
                    // returning a success response
                    return apiResponse.successResponseWithData(res, "Success", dbData);
                })
            } catch (error) {
                // returning a server side error response
                return apiResponse.serverSideError(res, "Server Side Error");
            }
        }
    ];


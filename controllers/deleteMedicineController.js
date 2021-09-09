const apiResponse = require("../helpers/apiResponse");
const { con } = require("../database");

exports.deleteMedicineData =
    [
        // request handler function
        (req, res) => {
            try {
                // getting the id from the url parameter
                const id = req.params.id;
                // SQL Query for deleting the data from the database
                const sqlQuery = `DELETE FROM medicine WHERE id = '${id}'`;
                // getting the medicine data from the mysql database
                con.query(sqlQuery, (err) => {
                    // if error return an apiResponse as serverSide Error
                    if (err) return apiResponse.serverSideError(res, "Server Side Error");
                    // returning a success response
                    return apiResponse.successResponse(res, "Data Deleted Successfully")
                })
            } catch (error) {
                // returning a server side error
                return apiResponse.serverSideError(res, "Server Side Error");
            }
        }
    ]
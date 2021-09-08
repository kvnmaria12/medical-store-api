const apiResponse = require("../helpers/apiResponse");
const { con } = require("../database");
const { check, validationResult } = require("express-validator");

exports.deleteMedicineData =
    [
        check("id").notEmpty().withMessage("Medicine Id cannot be blank").isNumeric().withMessage("Medicine id must be a number"),

        // once the express-validator checks for the above condition then we come the route handler function
        (req, res) => {

            try {
                // the validationResult function checks for all the errors in the req.body 
                const errors = validationResult(req);
                // if errors are there then
                if (!errors.isEmpty()) {
                    return apiResponse.clientSideErrorWithData(res, "Client Side Error", { Message: errors.array() });
                }

                const id = req.body.id;

                // SQL Query for deleting the data from the database
                const sqlQuery = `DELETE FROM medicine WHERE id = '${id}'`;

                // getting the medicine data from the mysql database
                con.query(sqlQuery, (err) => {
                    // if error return an apiResponse as serverSide Error
                    if (err) return apiResponse.serverSideError(res, "Server Side Error");

                    return apiResponse.successResponse(res, "Data Deleted Successfully")
                })

            } catch (error) {
                return apiResponse.serverSideError(res, "Server Side Error");
            }
        }
    ]
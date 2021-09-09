const apiResponse = require("../helpers/apiResponse");
const { con } = require("../database");


exports.fetchMedicineDataWithId =
    [
        // router handler function
        (req, res) => {
            try {
                // if the client passes a parameter
                const query = req.query;
                // get the length of the key values of the query object
                const queryLength = Object.keys(query).length;
                // id passed by the client as a parameter
                const id = req.params.id;
                // if the client passes a id
                if (id) {
                    // SQL Query for fetching the data from the database
                    const sqlQuery = `SELECT * FROM medicine WHERE id = '${id}'`;
                    // getting the medicine data from the mysql database
                    con.query(sqlQuery, (err, dbData) => {
                        // if error return an apiResponse as serverSide Error
                        if (err) return apiResponse.serverSideError(res, "Server Side Error");
                        // otherwise return the database data to the client
                        return apiResponse.successResponseWithData(res, "Success", dbData);
                    });

                } else if (queryLength > 0) {  // if the queryLength is greater than 0

                    // to get the query data 
                    const { Name: MedicineName } = query;
                    // SQL Query for fetching the data from the database`
                    const sqlQuery = `SELECT * FROM medicine WHERE name = '${MedicineName}'`
                    // getting the medicine data based on the parameter
                    con.query(sqlQuery, (err, dbData) => {
                        // if error return an apiResponse as a serverSide Error
                        if (err) return apiResponse.serverSideError(res, "Server Side Error");
                        // otherwise return the database data to the client
                        return apiResponse.successResponseWithData(res, "Success", dbData);
                    });
                } else { //if the client doest not pass anything then send the whole db data

                    // SQL Query for fetching all the data from the database
                    const sqlQuery = `SELECT * FROM medicine`;
                    // getting the medicine data from the mysql database
                    con.query(sqlQuery, (err, dbData) => {
                        // if error return an apiResponse as serverSide Error
                        if (err) return apiResponse.serverSideError(res, "Server Side Error");
                        // returning a success response
                        return apiResponse.successResponseWithData(res, "Success", dbData);
                    })
                }
            } catch (error) {
                // if any server side error return an response to the client
                return apiResponse.serverSideError(res, "Server Side Error");
            }
        }
    ];


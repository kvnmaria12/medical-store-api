const apiResponse = require("../helpers/apiResponse");
const { con } = require("../database");

exports.updateMedicineData =
    [
        // route handler 
        (req, res) => {
            // getting the parameter id from the req object
            const id = req.params.id;
            // getting the query parameter form the req object
            const query = req.query;
            // destructuring all the property from the query object
            const { name } = query;
            const { price } = query;
            const { quantity } = query;
            const { categories } = query;
            const { manufacture_date } = query;
            const { expiry_date } = query;

            // sql query to get all the data from the medicine database
            const sqlQuery = `SELECT * FROM medicine WHERE id = '${id}'`;
            // fetch the data from the database using the con object
            con.query(sqlQuery, (err, dbData) => {
                // if any error return server side error response
                if (err) return console.log(err.message);
                // get each and every data form the database server
                const oldName = dbData[0].name;
                const oldPrice = dbData[0].price;
                const oldQuantity = dbData[0].quantity;
                const oldCategories = dbData[0].categories;
                const oldManufacture_date = dbData[0].manufacture_date;
                const oldExpiry_date = dbData[0].expiry_date;

                // query to update the rows in the database
                const updateQuery = `UPDATE medicine SET name = '${name || oldName}', price = '${price || oldPrice}', quantity = '${quantity || oldQuantity}', categories = '${categories || oldCategories}', manufacture_date = '${manufacture_date || oldManufacture_date}', expiry_date = '${expiry_date || oldExpiry_date}' WHERE id = '${id}'`;

                // update the query to the database server using con object
                con.query(updateQuery, (err) => {
                    // if any error return as server side error as a response
                    if (err) return apiResponse.serverSideError(res, "Server Side Response");
                    // otherwise send a success response to the client
                    return apiResponse.successResponse(res, "Successfully Updated");
                });
            });
        }
    ];
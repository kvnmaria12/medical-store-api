const apiResponse = require("../helpers/apiResponse");
const { con } = require("../database");

exports.updateMedicineData =
    [
        // route handler 
        (req, res) => {
            const id = req.params.id;
            const query = req.query;

            const { name } = query;
            const { price } = query;
            const { quantity } = query;
            const { categories } = query;
            const { manufacture_date } = query;
            const { expiry_date } = query;

            const sqlQuery = `SELECT * FROM medicine WHERE id = '${id}'`;

            con.query(sqlQuery, (err, dbData) => {
                if (err) return console.log(err.message);

                const oldName = dbData[0].name;
                const oldPrice = dbData[0].price;
                const oldQuantity = dbData[0].quantity;
                const oldCategories = dbData[0].categories;
                const oldManufacture_date = dbData[0].manufacture_date;
                const oldExpiry_date = dbData[0].expiry_date;

                const updateQuery = `UPDATE medicine SET name = '${name || oldName}', price = '${price || oldPrice}', quantity = '${quantity || oldQuantity}', categories = '${categories || oldCategories}', manufacture_date = '${manufacture_date || oldManufacture_date}', expiry_date = '${expiry_date || oldExpiry_date}' WHERE id = '${id}'`;

                con.query(updateQuery, (err) => {
                    if (err) return apiResponse.serverSideError(res, "Server Side Response");
                    return apiResponse.successResponse(res, "Successfully Updated");
                });
            });
        }
    ];
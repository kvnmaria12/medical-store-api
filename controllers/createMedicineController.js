const apiResponse = require("../helpers/apiResponse");
const { con } = require("../database");

exports.createMedicineDataWithId =
    [
        (req, res) => {
            try {
                const id = req.body.id;
                const name = req.body.name;
                const price = req.body.price;
                const quantity = req.body.quantity;
                const categories = req.body.categories;
                const manufacture_date = req.body.manufacture_date;
                const expiry_date = req.body.expiry_date;

                const sqlQuery = `INSERT INTO medicine(id, name, price, quantity,  categories, manufacture_date, expiry_date) VALUES ?`;

                const values = [
                    [id, name, price, quantity, categories, manufacture_date, expiry_date]
                ];

                con.query(sqlQuery, [values], (err => {
                    if (err) return apiResponse.serverSideError(res, "Server Side Error");
                    return apiResponse.successResponse(res, "Data Created Successfully");
                }));
            } catch (error) {
                return apiResponse.serverSideError(res, "Server Side Error");
            }
        }
    ];

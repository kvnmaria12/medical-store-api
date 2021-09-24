const apiResponse = require("../helpers/apiResponse");
const { con } = require("../database");

exports.deleteMedicineDataWithId =
    [
        (req, res) => {
            try {
                const id = req.params.id;
                const sqlQuery = `DELETE FROM medicine WHERE id = '${id}'`;
                con.query(sqlQuery, (err) => {
                    if (err) return apiResponse.serverSideError(res, "Server Side Error");
                    return apiResponse.successResponse(res, "Data Deleted Successfully")
                })
            } catch (error) {
                return apiResponse.serverSideError(res, "Server Side Error");
            }
        }
    ];


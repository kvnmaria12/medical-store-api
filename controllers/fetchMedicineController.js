const apiResponse = require("../helpers/apiResponse");
const { con } = require("../database");

exports.fetchMedicineDataWithId =
    [
        (req, res) => {
            try {
                const id = req.params.id;

                if (id) {
                    const sqlQuery = `SELECT * FROM medicine WHERE id = '${id}'`;
                    con.query(sqlQuery, (err, dbData) => {
                        if (err) return apiResponse.serverSideError(res, "Server Side Error");
                        if (dbData.length > 0) {
                            return apiResponse.successResponseWithData(res, "Success", dbData);
                        } else {
                            return apiResponse.serverSideError(res, "Sorry, No Data Available");
                        }
                    });

                } else if (req.query.name) {
                    const medicineName = req.query.name;
                    const sqlQuery = `SELECT * FROM medicine WHERE name = '${medicineName}'`;
                    con.query(sqlQuery, (err, dbData) => {
                        if (err) return apiResponse.serverSideError(res, "Server Side Error");
                        if (dbData.length > 0) {
                            return apiResponse.successResponseWithData(res, "Success", dbData);
                        } else {
                            return apiResponse.serverSideError(res, "Sorry, No Data Available");
                        }
                    });
                } else {
                    const sqlQuery = `SELECT * FROM medicine`;
                    con.query(sqlQuery, (err, dbData) => {
                        if (err) return apiResponse.serverSideError(res, "Server Side Error");
                        if (dbData.length > 0) {
                            return apiResponse.successResponseWithData(res, "Success", dbData);
                        } else {
                            return apiResponse.serverSideError(res, "Sorry, You DataBase is Empty")
                        }
                    })
                }
            } catch (error) {
                return apiResponse.serverSideError(res, "Server Side Error");
            }
        }
    ];
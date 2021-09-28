const apiResponse = require("../helpers/apiResponse");
const { con } = require("../database");
const { validationResult, body } = require("express-validator");

exports.createMedicineDataWithId =
    [
        body("name").notEmpty().withMessage("Medicine Name cannot be blank").isLength({ min: 2 }).withMessage("Medicine Name must have atleast 2 characters"),
        body("price").notEmpty().withMessage("Medicine Price cannot be blank").isNumeric().withMessage("Medicine Price must be a number").isLength({ min: 2 }).withMessage("Medicine Price must have atleast 2 characters"),
        body("quantity").notEmpty().withMessage("Medicine Quantity cannot be blank").isNumeric().withMessage("Medicine quantity must be a number").isLength({ min: 2 }).withMessage("Medicine Quantity must have atleast 2 characters"),
        body("categories").notEmpty().withMessage("Medicine Quantity cannot be blank").isLength({ min: 2 }).withMessage("Medicine Categories must have atleast 2 characters"),
        body("manufacture_date").notEmpty().withMessage("Manufactured_Date cannot be blank").isLength({ min: 2 }).withMessage("Manufactured_Date must have atleast 2 characters"),
        body("expiry_date").notEmpty().withMessage("Expiry_Date cannot be blank").isLength({ min: 2 }).withMessage("Expiry_Date must have atleast 2 characters"),

        (req, res) => {
            try {
                const errors = validationResult(req);
                // if errors are there then
                if (!errors.isEmpty()) {
                    return apiResponse.clientSideErrorWithData(res, "Client Side Error", { Message: errors.array() });
                }

                const id = req.body.id;
                const name = req.body.name;
                const price = req.body.price;
                const quantity = req.body.quantity;
                const categories = req.body.categories;
                const manufacture_date = req.body.manufacture_date;
                const expiry_date = req.body.expiry_date;

                const sqlQuery = `INSERT INTO medicine(name, price, quantity,  categories, manufacture_date, expiry_date) VALUES ?`;

                const values = [
                    [name, price, quantity, categories, manufacture_date, expiry_date]
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

const express = require("express");
const { con } = require("../database");
const apiResponse = require("../helpers/apiResponse");
const { validationResult, check } = require("express-validator");

// exporting the createMedicine function
exports.createMedicine =
    [
        check("id").notEmpty().withMessage("Medicine Id cannot be blank").isNumeric().withMessage("Medicine id must be a number"),
        check("name").notEmpty().withMessage("Medicine Name cannot be blank").isLength({ min: 2 }).withMessage("Medicine Name must have atleast 4 characters"),
        check("price").notEmpty().withMessage("Medicine Price cannot be blank").isNumeric().withMessage("Medicine Price must be a number").isLength({ min: 2 }).withMessage("Medicine Price must have atleast 2 characters"),
        check("quantity").notEmpty().withMessage("Medicine Quantity cannot be blank").isNumeric().withMessage("Medicine quantity must be a number").isLength({ min: 2 }).withMessage("Medicine Quantity must have atleast 2 characters"),
        check("categories").notEmpty().withMessage("Medicine Quantity cannot be blank").isLength({ min: 2 }).withMessage("Medicine Categories must have atleast 2 characters"),
        check("manufacture_date").notEmpty().withMessage("Manufactured_Date cannot be blank").isLength({ min: 2 }).withMessage("Manufactured_Date must have atleast 2 characters"),
        check("expiry_date").notEmpty().withMessage("Expiry_Date cannot be blank").isLength({ min: 2 }).withMessage("Expiry_Date must have atleast 2 characters"),

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
                const name = req.body.name;
                const price = req.body.price;
                const quantity = req.body.quantity;
                const categories = req.body.categories;
                const manufacture_date = req.body.manufacture_date;
                const expiry_date = req.body.expiry_date;

                // SQL Query for inserting data
                const sqlQuery = "INSERT INTO medicine(id, name, price, quantity, categories, manufacture_date, expiry_date) VALUES ?";
                // Storing all the values
                const values = [
                    [id, name, price, quantity, categories, manufacture_date, expiry_date]
                ];
                // query for inserting data in the database
                con.query(sqlQuery, [values], (err) => {

                    if (err) return console.log(err.message);

                    return apiResponse.successResponse(res, "Date Entered Successfully");

                });
                // to catch the error
            } catch (error) {
                return apiResponse.serverSideError(res, "Server Side Error");
            }
        }
    ];

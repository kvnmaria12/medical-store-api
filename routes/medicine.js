const express = require("express");
const medicineController = require("../controllers/deleteMedicineController");

// creating a router object
const router = express.Router();
// creating a route
router.post("/:id", medicineController.deleteMedicineData);
// exporting the router object
module.exports = router;


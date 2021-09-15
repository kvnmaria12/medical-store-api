const express = require("express");
const medicineController = require("../controllers/medicineUpdateController");

// creating a router object
const router = express.Router();
//creating a route path
router.put("/:id", medicineController.updateMedicineData);
// exporting the router object
module.exports = router;

const express = require("express");
const medicineController = require("../controllers/fetchMedicineController");

// creating a router object
const router = express.Router();
// creating a route
router.post("/data", medicineController.fetchMedicineData);
// exporting the router object
module.exports = router;

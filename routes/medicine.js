const express = require("express");
const medicineController = require("../controllers/fetchMedicineController");

// creating a router object
const router = express.Router();
// creating a route path for passing a params id
router.get("/:id", medicineController.fetchMedicineDataWithId);
// creating a route path to display all the data
router.get("/", medicineController.fetchAllMedicineData);
// exporting the router object
module.exports = router;

const express = require("express");
const medicineController = require("../controller/createMedicineController");
// creating a router object
const router = express.Router();
// creating a route called create
router.post("/", medicineController.createMedicine);
// exporting the module
module.exports = router;
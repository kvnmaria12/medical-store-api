const express = require("express");
const medicineController = require("../controller/createMedicineController");

const router = express.Router();

router.post("/", medicineController.createMedicine);

module.exports = router;
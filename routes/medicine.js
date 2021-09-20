const express = require("express");
const medicineController = require("../controllers/createMedicineController");

const router = express.Router();
router.post("/", medicineController.createMedicineDataWithId);

module.exports = router;

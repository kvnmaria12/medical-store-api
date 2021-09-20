const express = require("express");
const medicineController = require("../controllers/medicineUpdateController");

const router = express.Router();
router.put("/:id", medicineController.updateMedicineData);

module.exports = router;

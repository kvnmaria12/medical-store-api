const express = require("express");
const medicineController = require("../controllers/updateMedicineController");

const router = express.Router();
router.put("/:id", medicineController.updateMedicineDataWithId);

module.exports = router;

const express = require("express");
const medicineController = require("../controllers/fetchMedicineController");

const router = express.Router();
router.get(["/:id", "/"], medicineController.fetchMedicineDataWithId);

module.exports = router;

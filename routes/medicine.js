const express = require("express");
const medicineController = require("../controllers/deleteMedicineController");

const router = express.Router();
router.delete("/:id", medicineController.deleteMedicineDataWithId);

module.exports = router;
const express = require("express");
const medicineController = require("../controllers/deleteMedicineController");

const router = express.Router();
router.delete("/:id", medicineController.deleteMedicineDataWithId);

const medicineController = require("../controllers/createMedicineController");

const router = express.Router();
router.post("/", medicineController.createMedicineDataWithId);


module.exports = router;